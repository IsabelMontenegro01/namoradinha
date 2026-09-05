import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import LoadingScreen from '../components/LoadingScreen.jsx'
import YodaBadge from '../components/YodaBadge.jsx'
import Confetti from '../components/Confetti.jsx'
import { pedido } from '../data/story.js'
import '../styles/pedido.css'

// Procura o gif de comemoração em src/assets/gifs/comemoracao.gif
const gifs = import.meta.glob('../assets/gifs/*', { eager: true, import: 'default' })
const celebrationGif = Object.entries(gifs).find(([path]) => path.endsWith('/comemoracao.gif'))?.[1]

// Cada "não" clicado deixa o botão SIM maior e o NÃO menor.
// Ajuste esses números se quiser uma progressão mais ou menos exagerada.
const NO_SCALE = [1, 0.8, 0.6, 0.42]
const YES_SCALE = [1, 1.18, 1.4, 1.7]

export default function Pedido({ onBack }) {
  const [stage, setStage] = useState('warning') // warning -> loading -> question -> yes
  const [noClicks, setNoClicks] = useState(0)

  const noScale = NO_SCALE[Math.min(noClicks, NO_SCALE.length - 1)]
  const yesScale = YES_SCALE[Math.min(noClicks, YES_SCALE.length - 1)]

  return (
    <div className="page pedido-page">
      <div className="page-content">
        {stage === 'warning' && (
          <div className="pedido-warning">
            <Reveal><span className="eyebrow">{pedido.warningEyebrow}</span></Reveal>
            <Reveal><h1>⚠️ {pedido.warningTitle}</h1></Reveal>
            <Reveal><p>{pedido.warningText}</p></Reveal>
            <Reveal>
              <button className="btn btn-primary" onClick={() => setStage('loading')}>
                {pedido.warningButton}
              </button>
            </Reveal>
            <div className="nav-buttons">
              <button className="btn btn-ghost" onClick={onBack}>
                ← voltar
              </button>
            </div>
          </div>
        )}

        {stage === 'loading' && (
          <LoadingScreen messages={pedido.loadingMessages} onDone={() => setStage('question')} msPerMessage={2500} />
        )}

        {stage === 'question' && (
          <div className="pedido-question">
            <Reveal><h1>{pedido.question.name}</h1></Reveal>
            <Reveal delay={200}><h2>{pedido.question.ask}</h2></Reveal>

            <Reveal delay={400}>
              <div className="pedido-buttons">
                <button
                  className="btn btn-primary pedido-yes"
                  style={{ transform: `scale(${yesScale})` }}
                  onClick={() => setStage('yes')}
                >
                  {pedido.yes}
                </button>
                <button
                  className="btn pedido-no"
                  style={{ transform: `scale(${noScale})`, opacity: noScale }}
                  onClick={() => setNoClicks((n) => Math.min(n + 1, NO_SCALE.length - 1))}
                >
                  {pedido.no}
                </button>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <YodaBadge label="decisão óbvia, isso é" />
            </Reveal>
          </div>
        )}

        {stage === 'yes' && (
          <div className="pedido-success">
            <Confetti />
            <Reveal><h1>{pedido.successTitle}</h1></Reveal>
            {celebrationGif && (
              <Reveal delay={150}>
                <img className="pedido-gif" src={celebrationGif} alt="comemoração" />
              </Reveal>
            )}
            {pedido.successParagraphs.map((paragraph, i) => (
              <Reveal key={i} delay={300 + i * 200}>
                <p className="pedido-success-line">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
