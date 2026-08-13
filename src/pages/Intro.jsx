import Reveal from '../components/Reveal.jsx'
import { intro } from '../data/story.js'
import '../styles/intro.css'

export default function Intro({ onContinue }) {
  return (
    <div className="page intro-page">
      <div className="page-content intro-content">
        {intro.lines.map((line, i) => (
          <Reveal key={i} delay={i * 400} as="p" className="intro-line">
            {line}
          </Reveal>
        ))}
        <Reveal delay={intro.lines.length * 400 + 200}>
          <button className="btn btn-primary" onClick={onContinue}>
            {intro.button}
          </button>
        </Reveal>
      </div>
    </div>
  )
}
