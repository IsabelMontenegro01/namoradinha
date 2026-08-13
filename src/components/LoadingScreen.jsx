import { useEffect, useState } from 'react'

/**
 * Mostra as mensagens de "loading" uma por vez e, ao final,
 * chama onDone(). Usado antes de revelar a pergunta no capítulo 4.
 *
 * Para trocar as mensagens, edite `loadingMessages` em src/data/story.js.
 */
export default function LoadingScreen({ messages, onDone, msPerMessage = 900 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index >= messages.length) {
      const timeout = setTimeout(onDone, 500)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(() => setIndex((i) => i + 1), msPerMessage)
    return () => clearTimeout(timeout)
  }, [index, messages.length, msPerMessage, onDone])

  const current = messages[Math.min(index, messages.length - 1)]

  return (
    <div className="loading-screen">
      <span className="loading-message" key={index}>
        {current}
      </span>
    </div>
  )
}
