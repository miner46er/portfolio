import { useEffect, useState } from 'react'
import styles from '../styles/typewriter.module.css'

function Typewriter ({ phrases }) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(phrases[0])
      return
    }

    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const tick = () => {
      const phrase = phrases[phraseIndex]
      if (!deleting) {
        charIndex++
        setText(phrase.slice(0, charIndex))
        if (charIndex === phrase.length) {
          deleting = true
          timer = setTimeout(tick, 1800)
          return
        }
        timer = setTimeout(tick, 52 + Math.random() * 46)
        return
      }

      charIndex--
      setText(phrase.slice(0, charIndex))
      if (charIndex === 0) {
        deleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        timer = setTimeout(tick, 340)
        return
      }
      timer = setTimeout(tick, 26)
    }

    timer = setTimeout(tick, 600)
    return () => clearTimeout(timer)
  }, [phrases])

  return (
    <span className={styles.typed} aria-hidden='true'>
      <span>{text}</span>
      <span className={styles.caret} />
    </span>
  )
}

export default Typewriter
