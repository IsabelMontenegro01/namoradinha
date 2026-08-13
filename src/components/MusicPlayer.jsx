import { useEffect, useRef, useState } from 'react'

// Procura o arquivo de música dentro de src/assets/music/.
// Coloque o arquivo com o nome "trilha.mp3" (ou troque o nome abaixo).
const tracks = import.meta.glob('../assets/music/*', {
  eager: true,
  import: 'default',
})
const TRACK_FILENAME = 'trilha.mp3'
const trackSrc = Object.entries(tracks).find(([path]) =>
  path.endsWith('/' + TRACK_FILENAME)
)?.[1]

/**
 * Toca a música de fundo em loop durante toda a experiência.
 * `startSignal` é um valor que muda (ex: um número que incrementa)
 * na primeira interação do usuário — é isso que dispara o autoplay,
 * respeitando a política dos navegadores que bloqueiam som sem
 * interação prévia.
 */
export default function MusicPlayer({ startSignal }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const hasStartedRef = useRef(false)

  // Inicia a música na primeira interação do usuário.
  useEffect(() => {
    if (!startSignal || hasStartedRef.current || !audioRef.current) return
    hasStartedRef.current = true
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // navegador bloqueou o autoplay; usuário pode dar play manualmente
        setPlaying(false)
      })
  }, [startSignal])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true))
    }
  }

  if (!trackSrc) return null // nenhuma música foi adicionada ainda — não quebra o site

  return (
    <div className="music-player">
      <audio ref={audioRef} src={trackSrc} loop preload="auto" />
      <button
        className="music-toggle"
        onClick={toggle}
        aria-label={playing ? 'pausar música' : 'tocar música'}
        title={playing ? 'pausar música' : 'tocar música'}
      >
        {playing ? '❚❚' : '♪'}
      </button>
    </div>
  )
}
