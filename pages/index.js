import Head from "next/head";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Astyltsvig consulting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img
          src="https://github.com/astyltsvig/astyltsvig.dk/blob/main/public/logo_transparent.png?raw=true"
          width="450"
          class="fade-in-image"
        />
        <div class="typewriter">
          <h3>Achieve your dream with software.</h3>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}
