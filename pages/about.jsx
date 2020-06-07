import styles from '../styles/page_about.module.scss'
import Header from '../components/Header'
import Head from 'next/head'

function About () {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
      </Head>
      <Header />
      <main className={styles.content}>
        <h1 className={styles.title}>
          About Me
        </h1>
        <p className={styles.paragraph}>
          I’m a hardworking individual who strives to always learn new things every day.
          I’m currently a student at Bandung Institute of Technology Informatics major.
          I’ve always been ever so curious about automation and optimization because I’ve
          seen many projects and code bases didn’t utilize precious resources such as man
          time and computation resource effectively, therefore I try to write code
          effectively and efficiently. I’ve done many projects as a team needing teamwork
          and effective communication.
        </p>
        <div className={styles.contact}>
          <div className={styles.contactDetail}>
            <img src='/GitHub-Mark-64px.png' />
            <a href='github.com/miner46er'>github.com/miner46er</a>
          </div>
          <div className={styles.contactDetail}>
            <img src='/LI-In-Bug.png' />
            <a href='linkedin.com/in/stefanusardi'>linkedin.com/in/stefanusardi</a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
