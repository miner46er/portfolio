import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/page_home.module.css'
import Typewriter from '../components/Typewriter'
import ProjectCard from '../components/ProjectCard'
import { ArrowRightIcon } from '../components/Icons'
import PROJECTS from '../data/projects'

const PHRASES = [
  'I build systems that handle thousands of requests per second.',
  'Go, Kubernetes, and reliable backends.',
  'Clean code, scalable systems.',
  'From Raspberry Pi apps to cloud migrations.'
]

function Home () {
  return (
    <div className='view'>
      <Head>
        <title>Stefanus Ardi Mulia — software engineer</title>
        <meta name='description' content='Stefanus Ardi Mulia is a software engineer building highly concurrent Go backends and cloud infrastructure across GCP and Tencent Cloud.' />
      </Head>
      <div className='wrap'>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.statusStrip}>
              <span className={styles.statusLabel}>now</span>
              <span aria-hidden='true'>·</span>
              <span>Senior Software Engineer at Gojek</span>
              <span aria-hidden='true'>·</span>
              <span className={styles.statusLive}><span className={styles.statusDot} aria-hidden='true' />currently shipping</span>
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroPrompt} aria-hidden='true'>$</span>
              <span>hello, i'm <span className={styles.accent}>ardi</span>.</span>
            </h1>
            <p className={styles.heroType}>
              <span className='sr-only'>I build systems that handle thousands of requests per second.</span>
              <Typewriter phrases={PHRASES} />
            </p>
            <p className={styles.heroStandfirst}>
              Backend engineering, mostly in Go — Kubernetes, distributed systems, and the
              strange joy of keeping things from falling over at 2am.
            </p>
            <p className={styles.heroLede}>
              I'm a software engineer who's been building for years, from custom apps on a
              Raspberry Pi to systems handling thousands of requests per second — and I care
              about clean code and systems that stay up.
            </p>
            <div className={styles.heroActions}>
              <Link href='/experience' className='btn btn--primary'>
                View résumé
                <ArrowRightIcon />
              </Link>
              <Link href='/projects' className='btn btn--ghost'>See projects</Link>
            </div>
          </div>
        </div>

        <div className='section-head'>
          <h2>Projects</h2>
          <Link href='/projects'>All projects</Link>
        </div>
        <div className='project-grid'>
          {PROJECTS.slice(0, 2).map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
