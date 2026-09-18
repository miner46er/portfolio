import { useEffect, useState } from 'react'
import styles from '../styles/theme-toggle.module.css'
import { MonitorIcon, MoonIcon, SunIcon } from './Icons'

const THEMES = ['light', 'dark', 'system']
const LABELS = { light: 'Light', dark: 'Dark', system: 'System' }

function applyTheme (mode) {
  const resolved = mode === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : mode
  const root = document.documentElement
  root.setAttribute('data-theme', resolved)
  root.setAttribute('data-theme-mode', mode)
}

function ThemeToggle () {
  const [mode, setMode] = useState('dark')

  useEffect(() => {
    let stored = null
    try {
      stored = window.localStorage.getItem('theme')
    } catch (e) {}
    if (THEMES.indexOf(stored) > -1) setMode(stored)
  }, [])

  useEffect(() => {
    applyTheme(mode)
    try {
      window.localStorage.setItem('theme', mode)
    } catch (e) {}
  }, [mode])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      setMode((current) => {
        if (current === 'system') applyTheme('system')
        return current
      })
    }
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', onChange)
      return () => mq.removeEventListener('change', onChange)
    }
    mq.addListener(onChange)
    return () => mq.removeListener(onChange)
  }, [])

  const next = THEMES[(THEMES.indexOf(mode) + 1) % THEMES.length]

  return (
    <button
      type='button'
      className={styles.toggle}
      aria-live='polite'
      aria-label={`Color theme: ${LABELS[mode]}. Switch to ${LABELS[next]}.`}
      onClick={() => setMode(next)}
    >
      <span className={styles.icon} aria-hidden='true'>
        {mode === 'light' && <SunIcon />}
        {mode === 'dark' && <MoonIcon />}
        {mode === 'system' && <MonitorIcon />}
      </span>
      <span className={styles.label}>{LABELS[mode]}</span>
    </button>
  )
}

export default ThemeToggle
