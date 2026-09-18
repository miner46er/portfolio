import Link from 'next/link'
import styles from '../styles/header.module.css'
import Navbar from './Navbar'
import ThemeToggle from './ThemeToggle'

function Header () {
  return (
    <header className={styles.siteHeader}>
      <div className={`wrap ${styles.headerInner}`}>
        <Link href='/' className={styles.brand} aria-label='Ardi, home'>
          <span className={styles.brandMark}>/dev/</span>ardi<span className={styles.brandCursor} aria-hidden='true'>_</span>
        </Link>
        <Navbar />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
