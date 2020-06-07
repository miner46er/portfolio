import styles from '../styles/page_home.module.scss'
import Header from '../components/Header'
import Head from 'next/head'

function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome!</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.h1}><em>Hello</em>, there!</h1>
        <h2 className={styles.h2}>I'm Ardi and this is my site.</h2>
      </main>
    </div>
  )
}

export default Home
