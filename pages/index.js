import Head from 'next/head'
import Image from 'next/image'
import Feature from '../components/Feature'

const Home = () => {
  return (
    <>
      <Head>
        <title>Tausur Rahaman</title>
      </Head>
      <main className='overflow-hidden'>
        <div className=''>
          <div className='w-screen h-full'>
            <img src="/bg.jpg" alt="" />
          </div>
        </div>
        <Feature />
      </main>
    </>
  )
}

export default Home
