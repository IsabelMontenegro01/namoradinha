import Reveal from '../components/Reveal.jsx'
import PhotoFrame from '../components/PhotoFrame.jsx'
import Navigation from '../components/Navigation.jsx'
import ProtocolList from '../components/ProtocolList.jsx'
import fundoNos from '../assets/images/nos-fundo.jpg'
import {
  nosIntro,
  nosTimeline,
  nosBridge,
  protocols,
  nosReflection,
  nosClosing,
  nosButton,
} from '../data/story.js'
import '../styles/nos.css'

export default function Nos({ onBack, onContinue }) {
  return (
    <div className="page nos-page">
      <div className="nos-page-bg" style={{ backgroundImage: `url(${fundoNos})` }} />
      <div className="page-content">
        <Reveal><span className="eyebrow">{nosIntro.eyebrow}</span></Reveal>
        <Reveal><h1>{nosIntro.title}</h1></Reveal>

        <div className="nos-timeline">
          {nosTimeline.map((item, i) => (
            <Reveal key={i} className="nos-timeline-item">
              <span className="nos-date">{item.date}</span>
              <p>{item.text}</p>
              {item.photo && <PhotoFrame file={item.photo} aspect={item.aspect || '4 / 3'} />}
            </Reveal>
          ))}
        </div>

        {nosBridge.map((line, i) => (
          <Reveal key={i}>
            <p className="nos-bridge">{line}</p>
          </Reveal>
        ))}

        <Reveal>
          <ProtocolList protocols={protocols} />
        </Reveal>

        <div className="nos-reflection">
          {nosReflection.map((paragraph, i) => (
            <Reveal key={i} delay={i * 60}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="nos-closing">
          {nosClosing.map((line, i) => (
            <Reveal key={i} delay={i * 150}>
              <p className="nos-closing-line">{line}</p>
            </Reveal>
          ))}
        </div>

        <Navigation onBack={onBack} onContinue={onContinue} continueLabel={nosButton} />
      </div>
    </div>
  )
}