import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

  const router = useRouter()

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const handler = async (e) => {
    e.preventDefault()
    const data = {username,password}
    const res = await fetch('/api/adminLogin',{
      method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': "application/json"
        }
    }).then(res=>{
      if(res.ok){
        router.push('/admin/adminPage')
      }else{
        toast.error("Wrong credentials")
      }
    })
  }

  return (
    <div className='bg-green-400'>
      <ToastContainer/>
      <div className='py-40 flex justify-center items-center'>
        <div className='bg-green-500 w-1/4 h-1/4 rounded-2xl shadow-2xl'>
          <h1 className='text-4xl flex justify-center items-center pt-5 font-bold'>Admin Login</h1>
          <div className=''>
            <form onSubmit={handler} className='py-12'>
              <input type="text" className='focus:outline-none text-xl bg-transparent border-b-2 border-black  block my-5 mx-10 placeholder:text-white'  placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
              <input type="password" className='focus:outline-none text-xl bg-transparent border-b-2 border-black mx-10 mb-5 placeholder:text-white' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <button className='text-xl bg-red-500 rounded-xl py-2 px-4 hover:bg-red-600 ml-28 mt-2 font-semibold'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login