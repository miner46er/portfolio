import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/page_about.module.css'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons'

const SOCIALS = [
  { label: 'Email', href: 'mailto:stefanus.ardimulia@gmail.com', Icon: MailIcon },
  { label: 'GitHub', href: 'https://github.com/miner46er', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/stefanusardi', Icon: LinkedInIcon }
]

function About () {
  return (
    <div className='view'>
      <Head>
        <title>About — Stefanus Ardi Mulia</title>
        <meta name='description' content='About Stefanus Ardi Mulia — software engineer building scalable backend systems and cloud infrastructure.' />
      </Head>
      <div className='wrap'>
        <div className={styles.about}>
          <p className='eyebrow'>About</p>
          <h1 className={`page-title ${styles.aboutHead}`}>About me</h1>
          <p className={styles.lead}>
            I'm a software engineer who's been building for years — from custom apps on a Raspberry Pi
            to highly concurrent systems handling thousands of requests per second.
          </p>
          <div className={styles.body}>
            <p>
              I love crafting impactful applications and scalable systems that can handle a ton of
              traffic without breaking a sweat. I'm a big fan of clean code, reliable systems, and
              always looking for ways to improve.
            </p>
            <p>
              Today I'm a Senior Software Engineer at Gojek, working on Go backends and Kubernetes
              infrastructure — including the migration of core logistics services (GoSend, GoBox,
              GoShop) from GCP to Tencent Cloud. Before that I worked at ByteDance on geofencing and
              authentication systems, and at GoTo Logistics on high-performance Go APIs.
            </p>
            <p>
              I studied Computer Science at Institut Teknologi Bandung, where my final project was on
              distributed ML autoscaling on top of Kubernetes. Alongside backend work I build smaller
              things: a Discord bot, a few Unity games, and projects based on folklore from my home
              region in West Sumatra. My full history is on the <Link href='/experience'>résumé page</Link>.
            </p>
          </div>
          <div className={styles.links}>
            {SOCIALS.map(({ label, href, Icon }) => {
              const external = !href.startsWith('mailto:')
              const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
              return (
                <a key={label} className={styles.socialLink} href={href} {...externalProps}>
                  <Icon />
                  {label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
