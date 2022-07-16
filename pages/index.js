import Head from 'next/head'
import mongoose from 'mongoose'
import Blog from '../model/blog'
import Link from 'next/link'

const Home = ({ blogs }) => {

  let obj = []
  if (blogs.length >= 3) {
    for (let i = 0; i < 3; i++) {
      obj.push(blogs[i])
    }
  } else {
    obj = blogs
  }

  return (
    <>
      <main className='overflow-hidden'>
        <div className=''>
          <div className='w-screen h-full'>
            <img src="/bg.jpg" alt="" />
          </div>
        </div>
        <div>
          <h1 className='text-4xl font-mono font-semibold text-gray-400 bg-gray-900 flex justify-center items-center pt-16'>Recent Blogs</h1>
          <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {obj.map((blog) => {
                  return <div className="p-4 md:w-1/3">
                    <Link href={`/Blogs/${blog.slug}`}>
                      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden cursor-pointer">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog.img} alt="blog" />
                        <div className="p-6">
                          <h1 className="title-font text-lg font-medium text-white mb-3">{blog.title}</h1>
                          <p className="leading-relaxed mb-3">{blog.shortDesc} ...</p>
                          <div className="flex items-center flex-wrap ">
                            <a className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>1.2K
                            </span>
                            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>6
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                })}
              </div>
            </div>
          </section>
          <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
              <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6 text-xl">“Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.”</p>
                    <a className="inline-flex items-center">
                      <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-white">― William Shakespeare</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6 text-xl">“[In the Universe it may be that] Primitive life is very common and intelligent life is fairly rare. Some would say it has yet to occur on Earth.”</p>
                    <a className="inline-flex items-center">
                      <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-white">― Stephen W. Hawking</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let blogs = await Blog.find()
  blogs = blogs.reverse()
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }
  }
}

export default Home
