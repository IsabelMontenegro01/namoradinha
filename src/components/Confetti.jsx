const COLORS = ['var(--accent-pedido)', 'var(--accent-voce)', 'var(--accent-nos)', 'var(--color-paper)']
const FLOWERS = ['🌹', '💐', '🌸']
const PIECES = 26

/**
 * Confete + flores caindo, usado só uma vez, no momento do "SIM".
 * Mistura pedacinhos de confete coloridos com emojis de rosa/buquê.
 */
export default function Confetti() {
  const pieces = Array.from({ length: PIECES }, (_, i) => {
    const left = Math.random() * 100
    const delay = Math.random() * 0.6
    const duration = 2.6 + Math.random() * 1.6
    const isFlower = i % 3 === 0 // 1 a cada 3 peças é uma flor, o resto é confete
    const color = COLORS[i % COLORS.length]
    const size = 6 + Math.random() * 5
    const flower = FLOWERS[i % FLOWERS.length]
    return { id: i, left, delay, duration, color, size, isFlower, flower }
  })

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p) =>
        p.isFlower ? (
          <span
            key={p.id}
            className="confetti-flower"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              fontSize: `${18 + Math.random() * 10}px`,
            }}
          >
            {p.flower}
          </span>
        ) : (
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
        )
      )}
    </div>
  )
}