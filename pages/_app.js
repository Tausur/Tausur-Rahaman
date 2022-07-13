import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Tausur Rahaman</title>
    </Head>
    <div className='fixed'>
      <Navbar />
    </div>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
