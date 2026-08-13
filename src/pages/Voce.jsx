import Reveal from '../components/Reveal.jsx'
import PhotoFrame from '../components/PhotoFrame.jsx'
import Navigation from '../components/Navigation.jsx'
import YodaBadge from '../components/YodaBadge.jsx'
import { voce } from '../data/story.js'
import '../styles/voce.css'
import fundoVoce from '../assets/images/voce-fundo.jpg'

export default function Voce({ onBack, onContinue }) {
  return (
    <div className="page voce-page" style={{ backgroundImage: `url(${fundoVoce})` }}>
      <div className="page-content">
        <Reveal><span className="eyebrow">{voce.eyebrow}</span></Reveal>
        <Reveal><h1>{voce.title}</h1></Reveal>

        <div className="voce-intro">
          {voce.intro.map((line, i) => (
            <Reveal key={i} delay={i * 120}>
              <p className="voce-intro-line">{line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <PhotoFrame file={voce.photo.file} caption={voce.photo.caption} />
        </Reveal>

        {voce.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 60}>
            <p>{paragraph}</p>
          </Reveal>
        ))}

        <Reveal><YodaBadge label="ela também acha você incrível" /></Reveal>

        <div className="voce-closing">
          {voce.closing.map((line, i) => (
            <Reveal key={i} delay={i * 150}>
              <p className="voce-closing-line">{line}</p>
            </Reveal>
          ))}
        </div>

        <Navigation onBack={onBack} onContinue={onContinue} continueLabel={voce.button} />
      </div>
    </div>
  )
}
