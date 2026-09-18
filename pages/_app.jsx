import '../styles/reset-css.css'
import '../styles/global.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProgressBar from '../components/ProgressBar'

function App ({ Component, pageProps }) {
  return (
    <>
      <a className='skip-link' href='#main'>Skip to content</a>
      <div className='backdrop' aria-hidden='true' />
      <ProgressBar />
      <Header />
      <main id='main' tabIndex={-1}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
