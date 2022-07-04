import Head from 'next/head'
import Image from 'next/image'
import Feature from '../components/Feature'
import mongoose from 'mongoose'
import Blog from '../model/blog'

const Home = ({blogs}) => {
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
        <Feature blogs={blogs}/>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let blogs = await Blog.find()
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }
  }
}

export default Home
