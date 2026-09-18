import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/navbar.module.css'

const LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' }
]

function Navbar () {
  const router = useRouter()

  return (
    <nav className={styles.siteNav} aria-label='Primary'>
      {LINKS.map((link) => {
        const current = router.pathname === link.href ? 'page' : undefined
        return (
          <Link key={link.href} href={link.href} className={styles.navLink} aria-current={current}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
