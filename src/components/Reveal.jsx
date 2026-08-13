import { useEffect, useRef, useState } from 'react'

/**
 * <Reveal> envolve qualquer conteúdo e faz ele aparecer suavemente
 * quando entra na tela (scroll). Usado em quase todas as páginas
 * para dar aquele efeito de "texto surgindo aos poucos".
 *
 * Uso:
 *   <Reveal><p>algum texto</p></Reveal>
 *   <Reveal delay={150}><p>aparece um pouco depois</p></Reveal>
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
