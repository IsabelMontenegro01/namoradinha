import { useState } from 'react'
import Intro from './pages/Intro.jsx'
import Eu from './pages/Eu.jsx'
import Voce from './pages/Voce.jsx'
import Nos from './pages/Nos.jsx'
import Pedido from './pages/Pedido.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'

/**
 * App.jsx só cuida da navegação entre os capítulos — nenhum texto
 * ou lógica de conteúdo fica aqui. Para editar textos, veja
 * src/data/story.js. Para editar cada capítulo, veja src/pages/.
 *
 * A navegação é linear e não usa nenhuma biblioteca de rotas:
 * é só um estado (`step`) que decide qual página aparece.
 * Isso também garante que, se a página for recarregada, a
 * experiência sempre volta para o início — como pedido.
 */
const STEPS = ['intro', 'eu', 'voce', 'nos', 'pedido']

export default function App() {
  const [step, setStep] = useState('intro')
  const [musicSignal, setMusicSignal] = useState(0)

  function goTo(nextStep) {
    setMusicSignal((n) => n + 1) // garante que a música comece na primeira interação
    setStep(nextStep)
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }

  function goBack() {
    const currentIndex = STEPS.indexOf(step)
    if (currentIndex > 0) goTo(STEPS[currentIndex - 1])
  }

  function goNext() {
    const currentIndex = STEPS.indexOf(step)
    if (currentIndex < STEPS.length - 1) goTo(STEPS[currentIndex + 1])
  }

  return (
    <>
      {step === 'intro' && <Intro onContinue={goNext} />}
      {step === 'eu' && <Eu onBack={goBack} onContinue={goNext} />}
      {step === 'voce' && <Voce onBack={goBack} onContinue={goNext} />}
      {step === 'nos' && <Nos onBack={goBack} onContinue={goNext} />}
      {step === 'pedido' && <Pedido onBack={goBack} />}

      <MusicPlayer startSignal={musicSignal} />
    </>
  )
}
