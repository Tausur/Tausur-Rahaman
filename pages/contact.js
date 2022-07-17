import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdEmail,MdMessage } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    toast.success("Message sent")
    const data = { name, email, message }
    event.preventDefault()
    const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': "application/json"
        }
      }) 
  }

  return (
    <div className='bg-gray-800 text-gray-300'>
      <ToastContainer/>
      <div className='py-28 flex justify-center items-center'>
        <form onSubmit={handleSubmit} className="bg-gray-900 md:w-96 md:h-[520px] rounded-3xl m-2" style={{
          "boxShadow": "25px 25px 75px rgba(0,0,0,0.25), 10px 10px 70px rgba(0,0,0,0.25), inset 5px 5px 10px rgba(0,0,0,0.5), inset 5px 5px 10px rgba(255,255,255,0.2), inset -5px -5px 15px rgba(0,0,0,0.75)"
        }}>
          <h1 className='md:text-3xl font-semibold text-gray-300 flex justify-center items-center pt-5 py-7 text-3xl'>Get in touch</h1>
          <div className='my-4'>
            <label className='md:text-xl justify-center items-center md:mx-7 my-2 font-semibold mx-4'>Name</label>
            <div className='flex justify-center items-center'>
              <BsFillPersonFill className='text-2xl md:ml-7 md:mx-1 flex justify-center items-center' />
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='focus:outline-none rounded-full md:mx-2 text-xl border-b-2 text-black h-10' />
            </div>
          </div>
          <div className='my-4'>
            <label className='md:text-xl justify-center items-center md:mx-7 my-2 font-semibold mx-4'>Email</label>
            <div className='flex justify-center items-center'>
              <MdEmail className='text-3xl md:ml-7 md:mx-1 flex justify-center items-center' />
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='focus:outline-none rounded-full md:mx-2 text-xl border-b-2 text-black h-10' />
            </div>
          </div>
          <div>
            <label className='md:text-xl justify-center items-center md:mx-7 font-semibold mx-4'>Message</label>
            <div className='flex justify-center items-center my-3'>
              <MdMessage className='text-2xl md:ml-7 md:mx-1 flex justify-center items-center ml-4' />
              <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} className='focus:outline-none rounded-xl md:mx-2 text-xl border-b-2 text-black mr-4' cols={27} rows={4} />
            </div>
          </div>
          <button className='rounded-2xl text-xl bg-blue-500 py-2 px-5 flex justify-center items-center m-auto my-3 text-white shadow-2xl'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default contact
