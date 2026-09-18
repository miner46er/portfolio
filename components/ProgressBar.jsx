import { useEffect, useRef } from 'react'
import styles from '../styles/progress.module.css'

function ProgressBar () {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    let ticking = false

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const ratio = max > 0 ? Math.min(1, Math.max(0, (window.scrollY || doc.scrollTop) / max)) : 0
      bar.style.transform = 'scaleX(' + ratio + ')'
      ticking = false
    }

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    update()

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <div className={styles.progress} role='presentation' aria-hidden='true'>
      <div ref={barRef} className={styles.bar} />
    </div>
  )
}

export default ProgressBar
