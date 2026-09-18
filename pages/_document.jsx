import Document, { Html, Head, Main, NextScript } from 'next/document'

const themeScript = '(function(){try{var m=localStorage.getItem("theme");var t=(m==="light"||m==="dark"||m==="system")?m:"dark";var r=t==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):t;var d=document.documentElement;d.setAttribute("data-theme",r);d.setAttribute("data-theme-mode",t)}catch(e){}})()'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en' data-theme='dark' data-theme-mode='dark'>
        <Head>
          <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
          <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <meta name='msapplication-TileColor' content='#0b0b0c' />
          <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
          <meta name='theme-color' content='#0b0b0c' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
          <link href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500&family=Space+Grotesk:wght@500;600;700&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
