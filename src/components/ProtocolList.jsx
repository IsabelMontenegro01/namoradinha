import { useEffect, useRef, useState } from 'react'

/**
 * Mostra a lista de "protocolos" (src/data/story.js -> protocols)
 * como se fosse um changelog / diff de código sendo riscado,
 * um por um — uma referência discreta ao fato da Isabel ser
 * engenheira. Dispara automaticamente quando o elemento entra
 * na tela; não precisa de clique.
 */
export default function ProtocolList({ protocols }) {
  const ref = useRef(null)
  const [brokenCount, setBrokenCount] = useState(0)

  // dispara a sequência de "quebra" assim que a seção entra em foco
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          protocols.forEach((_, i) => {
            setTimeout(() => setBrokenCount((count) => Math.max(count, i + 1)), i * 650 + 300)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="protocol-list" ref={ref}>
      <div className="protocol-header">
        <span className="protocol-header-dot" />
        <span>protocolos_isabel.md</span>
      </div>
      <ul>
        {protocols.map((protocol, i) => {
          const broken = i < brokenCount
          return (
            <li key={protocol.id} className={broken ? 'is-broken' : ''}>
              <span className="protocol-id">protocolo_{protocol.id}</span>
              <span className="protocol-text">{protocol.text}</span>
              <span className="protocol-status">{broken ? 'quebrado' : ''}</span>
            </li>
          )
        })}
      </ul>
      <div className="protocol-footer">
        protocolos quebrados: <strong>{brokenCount}</strong> / {protocols.length}
      </div>
    </div>
  )
}
