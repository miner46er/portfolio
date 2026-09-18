import styles from '../styles/footer.module.css'

function Footer () {
  return (
    <footer className={styles.siteFooter}>
      <div className={`wrap ${styles.footerInner}`}>
        <span>© 2026 Stefanus Ardi Mulia · Built with React and Next.js.</span>
        <nav className={styles.footerLinks} aria-label='Elsewhere'>
          <a href='mailto:stefanus.ardimulia@gmail.com'>Email</a>
          <a href='https://github.com/miner46er' target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a href='https://linkedin.com/in/stefanusardi' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
