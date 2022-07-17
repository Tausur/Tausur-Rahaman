import React from 'react'
import Blog from '../../model/blog'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const AdminPage = ({ blogs }) => {

  const [abc, setAbc] = useState(false)

  let myblog;

  useEffect(()=>{

  },[abc])

  const handleDelete = async()=>{
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

  return (
    <div className='pt-24 flex'>
      <div className='mx-12 bg-gray-200 w-64 h-screen'>
        <ul>
          <li className='text-2xl font-semibold flex pl-5 pt-5 hover:text-blue-500 cursor-pointer'>Post a new Blog</li>
          <li className='text-2xl font-semibold flex pl-5 pt-5 hover:text-blue-500 cursor-pointer'>Post on community </li>
          <li className='text-2xl font-semibold flex pl-5 pt-5 hover:text-blue-500 cursor-pointer'>Contact Messages</li>
        </ul>
      </div>
      <div>
        <Link href='/admin/addBlog'>
          <button className='text-xl rounded-3xl bg-blue-500 text-black font-semibold px-5 py-2 ml-[700px]'>New Post</button>
        </Link>
        <div>
          <h1 className='text-3xl font-bold px-8'>All Blogs</h1>
          <div className=''>
            {blogs.map((blog) => {
              myblog = blog
              return <div className='bg-gray-300'>
                <div className='mt-6 px-3 flex w-[800px]'>
                  <img src={blog.img} alt="" className='w-32 h-20 m-2' />
                  <p className='text-lg font-semibold flex items-center pl-5'>{blog.title}</p>
                  <Link href='/admin/updateBlog'>
                    <button className='text-xl ml-16 my-6 font-semibold flex items-center justify-center cursor-pointer bg-green-500 rounded-lg hover:bg-green-600 px-4 py-2'>Edit</button></Link>
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