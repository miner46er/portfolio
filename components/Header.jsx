import styles from '../styles/header.module.scss'
import Navbar from './Navbar'

function Header () {
  return (
    <header className={`${styles.container} ${styles.sticky}`}>
      <Navbar />
    </header>
  )
}

export default Header
