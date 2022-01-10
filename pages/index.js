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
        <Header title="Astyltsvig consulting" />
        <p className="description">
          Software solutions for you.
          <br/>
          <br/><a href="mailto:webmaster@example.com">astyltsvig@gmail.com</a> 
        </p>
      </main>

      <Footer />
    </div>
  )
}
