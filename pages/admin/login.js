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
    <div>
      <ToastContainer/>
      <div className='py-40'>
        <div>
          <h1 className='text-4xl flex justify-center items-center'>Admin Login</h1>
          <div className='flex justify-center items-center'>
            <form onSubmit={handler} className='py-12'>
              <input type="text" className='focus:outline-none text-xl bg-none border-b-2 border-black w-full block my-5' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
              <input type="password" className='focus:outline-none text-xl bg-none border-b-2 border-black w-full mb-5' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <button className='text-xl bg-green-500 rounded-xl py-2 px-4 hover:bg-green-600'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login