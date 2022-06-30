import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <div className='fixed'>
      <Navbar />
    </div>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
