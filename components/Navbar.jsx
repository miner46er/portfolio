import styles from '../styles/navbar.module.scss'
import { useState, useEffect } from 'react'

function NavLink (props) {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSelected(props.href === window.location.pathname ? styles.selected : '')
  })

  return (
    <a title={props.name} className={`${styles.navLink} ${selected}`} href={props.href}>{props.name}</a>
  )
}

function Navbar () {
  return (
    <nav className={styles.container}>
      <NavLink name='Home' href='/' />
      <NavLink name='Projects' href='/projects' />
      <NavLink name='About' href='/about' />
    </nav>
  )
}

export default Navbar
