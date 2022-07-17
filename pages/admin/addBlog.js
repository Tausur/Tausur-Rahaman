import React from 'react'
import { useState } from 'react'
import Blog from '../../model/blog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const AddBlog = () => {

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [img, setImg] = useState('')
  const [shortDesc, setShortDesc] = useState('')
  const [desc, setDesc] = useState('')

  const handler = async (e) => {
    e.preventDefault()
    const data = { title, slug, img, desc, shortDesc }
    const res = await fetch('/api/AddBlog', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    }).then(res => {
      if (res.ok) {
        toast.success("Blog posted successfully")
      } else {
        toast.error("Some error occured")
      }
    })
  }

  return (
    <div className='bg-green-400'>
      <div className='pt-24'>
            <p className='text-3xl font-bold flex justify-center items-center'>Add a new Blog</p>
            <form className='mt-4 bg-green-500 px-12 py-8 m-5 rounded-2xl w-1/2 h-1/5 ml-80 shadow-2xl' onSubmit={handler}>
              <input type="text" placeholder='Title' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-1/2 bg-transparent placeholder:text-black' value={title} onChange={(e) => setTitle(e.target.value)} />
              <input type="text" placeholder='Slug' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-1/2 bg-transparent placeholder:text-black' value={slug} onChange={(e) => setSlug(e.target.value)} />
              <input type="text" placeholder='Short Desc' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-1/2 bg-transparent placeholder:text-black' value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} />
              <input type="text" placeholder='Image' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-1/2 bg-transparent placeholder:text-black' value={img} onChange={(e) => setImg(e.target.value)} />
              <textarea type="text" placeholder='Description' className='focus:outline-none rounded-xl text-xl border-black border-2 block my-4  bg-transparent placeholder:text-black' cols={61} rows={10} value={desc} onChange={(e) => setDesc(e.target.value)} />
              <button className='text-xl ml-3 font-semibold mx-12 cursor-pointer bg-red-500 rounded-lg hover:bg-red-600 px-4 py-2'>Post</button>
            </form>
          </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || ""

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false
      }
    }
  }

  let blogs = await Blog.find()
  blogs = blogs.reverse()
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }
  }

}

export default AddBlog