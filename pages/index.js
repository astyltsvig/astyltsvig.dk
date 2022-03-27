import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Astyltsvig consulting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="https://github.com/astyltsvig/astyltsvig.dk/blob/main/public/logo_transparent.png?raw=true"/>
        <p className="description">
          Software solutions for you.
          <br/>
          <br/>
        </p>
      </main>

      <Footer />
    </div>
  )
}
