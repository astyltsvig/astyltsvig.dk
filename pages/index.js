import Head from 'next/head'
import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Astyltsvig consulting</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navigation></Navigation>
			<main>
				<div class='typewriter'>
					<h3>Archive your dream with software</h3>
				</div>
			</main>
			<Footer />
		</div>
	)
}
