import Reveal from '../components/Reveal.jsx'
import PhotoFrame from '../components/PhotoFrame.jsx'
import Navigation from '../components/Navigation.jsx'
import { eu } from '../data/story.js'
import '../styles/eu.css'
import fundoEu from '../assets/images/eu-fundo.jpg'

export default function Eu({ onBack, onContinue }) {
  return (
    <div className="page eu-page" style={{ backgroundImage: `url(${fundoEu  })` }}>
      <div className="page-content">
        <Reveal><span className="eyebrow">{eu.eyebrow}</span></Reveal>
        <Reveal><h1>{eu.title}</h1></Reveal>

        <Reveal>
          <PhotoFrame file={eu.photo.file} caption={eu.photo.caption} aspect="1080 / 1200" />
        </Reveal>

        {eu.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 60}>
            <p>{paragraph}</p>
          </Reveal>
        ))}

        <div className="eu-closing">
          {eu.closing.map((line, i) => (
            <Reveal key={i} delay={i * 150}>
              <p className="eu-closing-line">{line}</p>
            </Reveal>
          ))}
        </div>

        <Navigation onBack={onBack} onContinue={onContinue} continueLabel={eu.button} />
      </div>
    </div>
  )
}
