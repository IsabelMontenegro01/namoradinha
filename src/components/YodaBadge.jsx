const images = import.meta.glob('../assets/images/*', {
  eager: true,
  import: 'default',
})
const YODA_FILENAME = 'yoda.png'
const yodaSrc = Object.entries(images).find(([path]) => path.endsWith('/' + YODA_FILENAME))?.[1]

/**
 * Piada interna discreta: uma pequena imagem do Yoda, usada com
 * moderação (perto dos protocolos, e no loading do pedido).
 * Se você não colocar o arquivo yoda.png em src/assets/images/,
 * este componente simplesmente não renderiza nada — o site
 * continua funcionando normalmente.
 */
export default function YodaBadge({ label = 'aprovado pelo mestre' }) {
  if (!yodaSrc) return null
  return (
    <div className="yoda-badge">
      <img src={yodaSrc} alt="Yoda aprovando" />
      {label && <span>{label}</span>}
    </div>
  )
}
