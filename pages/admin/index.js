import React from 'react'
import Blog from '../../model/blog'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const AdminPage = ({ blogs }) => {

  const [abc, setAbc] = useState(false)
  const [active, setActive] = useState('')

  let myblog;

  useEffect(() => {

  }, [abc])

  const handleDelete = async () => {
    setAbc(true)
    let id = myblog._id
    const data = { id }
    try {
      const res = await fetch('/api/DeleteBlog', {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': "application/json"
        }
      })
      toast.success("Blog deleted")
    } catch (error) {
      toast.error("Failed to delete")
    }
  }

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [img, setImg] = useState('')
  const [shortDesc, setShortDesc] = useState('')
  const [desc, setDesc] = useState('')
  const [id, setId] = useState('')

  const handleUpdateBlog = async (e) => {
    e.preventDefault()
    const data = { id, title, slug, img, desc, shortDesc }
    const res = await fetch('/api/UpdateBlog', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    }).then(res => {
      if (res.ok) {
        toast.success("Blog updated successfully")
      } else {
        toast.error("Some error occured")
      }
    })
  }

  return (
    <div className='pt-24 flex'>
      <div className='mx-12 bg-gray-200 w-64 h-screen'>
        <ul>
          <li className='text-2xl font-semibold flex pl-5 pt-5 hover:text-blue-500 cursor-pointer'>Post a new Blog</li>
          <Link href='/admin/addCommunity'>
            <li className='text-2xl font-semibold flex pl-5 pt-5 hover:text-blue-500 cursor-pointer'>Post on community </li>
          </Link>
          <Link href='/admin/contactMsg'>
            <li className='text-2xl font-semibold flex pl-5 pt-5 hover:text-blue-500 cursor-pointer'>Contact Messages</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link href='/admin/addBlog'>
          <button className='text-xl rounded-3xl bg-blue-500 text-black font-semibold px-5 py-2 ml-[700px]'>New Post</button>
        </Link>
        <div>
          <div className='my-5'>
            {active == 'updateBlog' && <div className=''>
              <div className=''>
              <p className='text-3xl font-bold flex justify-center items-center'>Update Blog</p>
                <div className=''>     
                  <form className='w-11/12 mt-4 bg-green-500 px-12 py-8 m-5 rounded-2xl ml-56 shadow-2xl' onSubmit={handleUpdateBlog}>
                    <input type="text" placeholder='Title' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-full bg-transparent placeholder:text-black' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder='ID' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-full bg-transparent placeholder:text-black' value={id} onChange={(e) => setId(e.target.value)} />
                    <input type="text" placeholder='Slug' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-full bg-transparent placeholder:text-black' value={slug} onChange={(e) => setSlug(e.target.value)} />
                    <input type="text" placeholder='Short Desc' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-full bg-transparent placeholder:text-black' value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} />
                    <input type="text" placeholder='Image' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-full bg-transparent placeholder:text-black' value={img} onChange={(e) => setImg(e.target.value)} />
                    <textarea type="text" placeholder='Description' className='focus:outline-none rounded-xl text-xl border-black border-2 block my-4 bg-transparent placeholder:text-black' cols={72} rows={10} value={desc} onChange={(e) => setDesc(e.target.value)} />
                    <button className='text-xl font-semibold ml-28 cursor-pointer bg-red-500 rounded-lg hover:bg-red-600 px-4 py-2'>Update</button>
                  </form>
                </div>
              </div>
            </div>}
            <h1 className='text-3xl font-bold px-8 flex justify-center items-center '>All Blogs</h1>
            {blogs.map((blog) => {
              myblog = blog
              return <div className='bg-gray-300'>
                <div className='mt-6 px-3 flex w-[800px]'>
                  <img src={blog.img} alt="" className='w-32 h-20 m-2' />
                  <p className='text-lg font-semibold flex items-center pl-5'>{blog.title}</p>
                  {/* <Link href='/admin/updateBlog'> */}
                  <button className='text-xl ml-16 my-6 font-semibold flex items-center justify-center cursor-pointer bg-green-500 rounded-lg hover:bg-green-600 px-4 py-2' onClick={() => {
                    setActive(active == '' ? 'updateBlog' : '')
                    setSlug(blog.slug)
                    setImg(blog.img)
                    setDesc(blog.desc)
                    setShortDesc(blog.shortDesc)
                    setTitle(blog.title)
                    setId(blog._id)
                  }}>Edit</button>
                  {/* </Link> */}
                  <button className='text-xl ml-3 my-6 font-semibold flex items-center justify-center cursor-pointer bg-red-500 rounded-lg hover:bg-red-600 px-4 py-2' onClick={handleDelete}>Delete</button>
                </div>
              </div>
            })}

          </div>
        </div>
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

export default AdminPage
