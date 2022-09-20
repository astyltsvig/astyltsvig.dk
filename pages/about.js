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
				<div class='text'>
					<img src='profilImage.jpeg' class='rounded'></img>
					<h3 class='center'>Andreas Sørbye Styltsvig</h3>
					<p>
						<a href='https://www.linkedin.com/in/andreas-styltsvig-b03688119'>Linkedin</a>
					</p>
					<p>
						<a href='https://github.com/Astyltsvig'>Github</a>
					</p>
				</div>
			</main>
			<Footer />
		</div>
	)
}
