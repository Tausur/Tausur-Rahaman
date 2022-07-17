import React from 'react'
import Community from '../../model/Community'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const AddCommunity = ({communities}) => {

  const [post, setPost] = useState('')
  const [isImg, setIsImg] = useState('')
  const [img, setImg] = useState('')
  const [date, setDate] = useState('')
  
  const handler = async (e)=>{
    e.preventDefault()
    toast.success("Community posted successfully")
    const data = {post,isImg,img,date}
    const res = await fetch('/api/CommunityApi', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    })
  }

  return (
    <div className='bg-green-400'>
      <ToastContainer/>
      <div className='pt-24'>
            <p className='text-3xl font-bold flex justify-center items-center'>Add a new Community Post</p>
            <form className='mt-4 bg-green-500 px-12 py-8 m-5 rounded-2xl w-1/2 h-1/5 ml-80 shadow-2xl' onSubmit={handler}>
              <input type="text" placeholder='Date' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-1/2 bg-transparent placeholder:text-black' value={date} onChange={(e) => setDate(e.target.value)} />
              <input type="text" placeholder='is Image (Boolean)' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-1/2 bg-transparent placeholder:text-black' value={isImg} onChange={(e) => setIsImg(e.target.value)} />
              <input type="text" placeholder='Image' className='focus:outline-none text-xl border-black border-b-2 block my-4 w-1/2 bg-transparent placeholder:text-black' value={img} onChange={(e) => setImg(e.target.value)} />
              <textarea type="text" placeholder='Post' className='focus:outline-none rounded-xl text-xl border-black border-2 block my-4  bg-transparent placeholder:text-black' cols={61} rows={10} value={post} onChange={(e) => setPost(e.target.value)} />
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

  let communities = await Community.find()
  communities = communities.reverse()
  return {
    props: { communities: JSON.parse(JSON.stringify(communities)) }
  }

}

export default AddCommunity
