import Head from 'next/head'
import styles from '../styles/page_experience.module.css'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons'

const CONTACTS = [
  { label: 'stefanus.ardimulia@gmail.com', href: 'mailto:stefanus.ardimulia@gmail.com', Icon: MailIcon },
  { label: 'github.com/miner46er', href: 'https://github.com/miner46er', Icon: GitHubIcon },
  { label: 'linkedin.com/in/stefanusardi', href: 'https://linkedin.com/in/stefanusardi', Icon: LinkedInIcon }
]

const SKILLS = [
  { label: 'Languages', value: 'Go (primary), Python, Kotlin, C/C++' },
  { label: 'Infrastructure', value: 'Docker, Kubernetes, Nomad, Linux systems' },
  { label: 'Cloud platforms', value: 'GCP, Tencent Cloud, Alibaba Cloud' },
  { label: 'Tools', value: 'Prometheus, Grafana, Terraform, Ansible' }
]

const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Gojek',
    dates: 'Apr 2025 – Present',
    points: [
      'Migrated Go and Java backend services to Kubernetes and contributed to the migration of core logistics services (GoSend, GoBox, GoShop) from GCP to Tencent Cloud.',
      'Led backend development of Secure Booking (Delivery OTP), an OTP verification flow for delivery bookings that reduced the booking defect rate by 20% versus standard bookings.'
    ]
  },
  {
    role: 'Senior Software Engineer',
    company: 'ByteDance',
    dates: 'May 2024 – Apr 2025',
    points: [
      'Led development of the geofencing tool for courier-level Last Mile shipment sortation, using Elasticsearch as the main geospatial engine with MySQL for persistence and fallback.',
      'Engineered a scalable authentication system in Go with a custom OAuth2 flow and JWT handling, serving 5 internal services across the SEA and UK markets.'
    ]
  },
  {
    role: 'Senior Software Engineer',
    company: 'GoTo Logistics (GTL)',
    dates: 'Aug 2023 – May 2024 · Jakarta, Indonesia',
    points: [
      'Built the Go backend for a Transport Management System (TMS) used by the logistics operations team — First Mile and Last Mile delivery management and Cash on Delivery — after the company was acquired by ByteDance.',
      'Single-handedly rewrote a legacy Java microservice in Go, cutting its cloud cost by 70% while maintaining user acceptance.',
      'Optimized APIs carrying redundant data, reducing data transfer size by more than 60% and p99 latency by 30%.',
      'Spearheaded migration of several applications from Gojek\'s cloud infrastructure to GoTo Logistics\' own GCP environment, including CI/CD adaptation and upstream/downstream connectivity.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'PotatoBeans Company',
    dates: 'Jan 2020 – Aug 2023 · Bandung, Indonesia',
    points: [
      'Developed the national university selection system (SNBP) used by 2M+ students, 20K+ schools, and 100+ universities across Indonesia.',
      'Built civil servant (PNS) data management for Badan Kepegawaian Negara and a data-processing system for ITB\'s internal quality assurance.',
      'Implemented web application stacks and custom applications in Go and Dart, with containerization in mind.'
    ],
    media: [
      {
        src: '/experience/snmptn-selection.jpg',
        alt: 'Indonesia Ministry of Education\'s university selection (SNMPTN) system',
        caption: 'University selection (SNMPTN) system'
      },
      {
        src: '/experience/itb-qa-system.jpg',
        alt: 'Institut Teknologi Bandung\'s quality assurance data processing system',
        caption: 'ITB internal quality assurance system'
      }
    ]
  },
  {
    role: 'Engineering Lead (Co-Founder)',
    company: 'Brave Healthcare',
    dates: 'Jul 2020 – May 2023 · Bandung, Indonesia',
    points: [
      'Led a team of engineers building an end-to-end electrocardiogram (ECG/Holter) recording system across custom medical hardware, mobile apps, and backend analysis — including a demo for the Indonesian Heart Rhythm Society.'
    ],
    media: [
      {
        src: '/experience/brave-holter-prototype.jpg',
        alt: 'Holter (EKG) prototype and data capture system on mobile',
        caption: 'Holter (EKG) prototype & mobile capture'
      },
      {
        src: '/experience/brave-hrs-demo.jpg',
        alt: 'Technology demo for the Indonesian Heart Rhythm Society',
        caption: 'Demo for Indonesian Heart Rhythm Society'
      }
    ]
  },
  {
    role: 'Network Administrator',
    company: 'Institut Teknologi Bandung',
    dates: 'Nov 2019 – Nov 2021 · Bandung, Indonesia',
    points: [
      'Maintained networks and servers at the Benny Subianto Building and managed STEI ITB\'s G Suite accounts and apps.'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Transfree',
    dates: 'May 2020 – Aug 2020',
    points: [
      'Built web and mobile features, including a new user registration flow adopted by all new customers from August 2020 and an admin dashboard with email notifications.'
    ]
  },
  {
    role: 'Game Programmer Intern',
    company: 'Agate International',
    dates: 'Jun 2019 – Aug 2019 · Bandung, Indonesia',
    points: [
      'Researched and built AR applications with Google ARCore for Android using Unity and Unreal Engine, and wrote the team\'s ARCore quickstart guide.'
    ]
  },
  {
    role: 'Project Manager',
    company: 'Inkubator I.T. HMIF',
    dates: 'Sep 2018 – Feb 2019 · Bandung, Indonesia',
    points: [
      'Planned, budgeted, and managed student software projects, working with programmers and clients to deliver on scope.'
    ]
  }
]

function Experience () {
  return (
    <div className='view'>
      <Head>
        <title>Résumé — Stefanus Ardi Mulia</title>
        <meta name='description' content='Résumé of Stefanus Ardi Mulia — senior software engineer working on Go backends, Kubernetes, and cloud infrastructure.' />
      </Head>
      <div className='wrap'>
        <p className='eyebrow'>Experience</p>
        <h1 className='page-title'>Résumé</h1>
        <p className={styles.lead}>
          Software engineer with years of experience building backend systems — from custom apps
          on a Raspberry Pi to highly concurrent services handling thousands of requests per second.
          Currently a Senior Software Engineer at Gojek.
        </p>

        <div className={styles.contactRow}>
          {CONTACTS.map(({ label, href, Icon }) => {
            const external = !href.startsWith('mailto:')
            const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
            return (
              <a key={label} className={styles.contactLink} href={href} {...externalProps}>
                <Icon />
                {label}
              </a>
            )
          })}
        </div>

        <div className={styles.resumeGrid}>
          <div className={styles.resumeCol}>
            <h2>Experience</h2>
            <ol className={styles.timeline}>
              {EXPERIENCE.map((job) => (
                <li key={`${job.company} ${job.dates}`} className={styles.timelineItem}>
                  <h3 className={styles.timelineRole}>{job.role}</h3>
                  <span className={styles.timelineCompany}>{job.company}</span>
                  <span className={styles.timelineDates}>{job.dates}</span>
                  <ul className={styles.timelinePoints}>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {job.media && (
                    <div className={styles.timelineMedia}>
                      {job.media.map((item) => (
                        <figure key={item.src} className={styles.timelineFigure}>
                          <img src={item.src} alt={item.alt} loading='lazy' />
                          <figcaption>{item.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <aside className={styles.resumeCol}>
            <div className={styles.sideCard}>
              <h3>Technical skills</h3>
              <div className={styles.sideStack}>
                {SKILLS.map((skill) => (
                  <div key={skill.label} className={styles.skillGroup}>
                    <span className={styles.skillGroupLabel}>{skill.label}</span>
                    <span className={styles.skillGroupValue}>{skill.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sideCard}>
              <h3>Education</h3>
              <p className={styles.sideCardTitle}>Bachelor of Computer Science</p>
              <p className={styles.sideCardSub}>Institut Teknologi Bandung · Aug 2017 – Jul 2022</p>
              <ul className={styles.pointList}>
                <li>Final project on distributed ML autoscaling on top of Kubernetes.</li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Achievements</h3>
              <ul className={styles.pointList}>
                <li>1st Winner, ITB–NTUST Cloud Computing Hackathon, 2019 — an Alexa skill built with Node.js on AWS Lambda that simplifies how students receive class information.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Experience
