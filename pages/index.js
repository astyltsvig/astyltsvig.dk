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
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQEaV7Zt4G5qeQ/profile-displayphoto-shrink_800_800/0/1542720182911?e=1647475200&v=beta&t=RUc8KakhJsyHMDwAFxwdjcPVWlGMyWqqfHxAc7KHYz0" style="border-radius: 50%"/>
        <img src="https://github.com/astyltsvig/astyltsvig.dk/blob/main/public/LogoTransperant.png?raw=true"/>
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
