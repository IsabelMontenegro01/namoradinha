const COLORS = ['var(--accent-pedido)', 'var(--accent-voce)', 'var(--accent-nos)', 'var(--color-paper)']
const PIECES = 26

/**
 * Confete simples e discreto (nada de canvas/bibliotecas externas).
 * Usado só uma vez, no momento do "SIM" — o único lugar do site
 * onde vale a pena um efeito mais festivo.
 */
export default function Confetti() {
  const pieces = Array.from({ length: PIECES }, (_, i) => {
    const left = Math.random() * 100
    const delay = Math.random() * 0.6
    const duration = 2.4 + Math.random() * 1.4
    const color = COLORS[i % COLORS.length]
    const size = 6 + Math.random() * 5
    return { left, delay, duration, color, size, id: i }
  })

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: p.color,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
          }}
        />
      ))}
    </div>
  )
}
