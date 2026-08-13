/**
 * <PhotoFrame file="primeiro-encontro.jpg" caption="..." />
 *
 * Procura o arquivo dentro de src/assets/images/. Se o arquivo
 * ainda não existir (porque você não colocou a foto real lá),
 * mostra um espaço reservado elegante no lugar, com o nome do
 * arquivo esperado escrito nele — assim fica óbvio onde colocar
 * cada foto depois.
 */

// Carrega todas as imagens da pasta de uma vez (Vite resolve isso em build).
// Para adicionar uma foto nova, basta colocar o arquivo na pasta — não
// precisa importar nada manualmente aqui.
const images = import.meta.glob('../assets/images/*', {
  eager: true,
  import: 'default',
})

function resolveImage(file) {
  const match = Object.entries(images).find(([path]) => path.endsWith('/' + file))
  return match ? match[1] : null
}

export default function PhotoFrame({ file, caption, aspect = '4 / 5' }) {
  const src = resolveImage(file)

  return (
    <figure className="photo-frame" style={{ aspectRatio: aspect }}>
      {src ? (
        <img src={src} alt={caption || ''} loading="lazy" />
      ) : (
        <div className="photo-placeholder">
          <span className="photo-placeholder-label">{file}</span>
        </div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
