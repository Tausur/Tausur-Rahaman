import React from 'react'
import { useState } from 'react'
import Contact from '../../model/contact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ContactMsg = ({contacts}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  return (
    <div>
      <div className='py-20 bg-green-400'>
        <p className='text-4xl flex justify-center items-center mb-8 mt-5'>All Contact Messages</p>
        {contacts.map((contact)=>{
          return <div>
            <div className='py-5 bg-green-500 rounded-lg shadow-2xl my-2 mx-72'>
              <p className='text-xl font-semibold px-10'>Name : {contact.name}</p>
              <p className='text-xl font-semibold px-10'>Email : {contact.email}</p>
              <p className='text-xl font-semibold px-10'>Message : {contact.message}</p>
            </div>
          </div>
        })}
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

  let contacts = await Contact.find()
  contacts = contacts.reverse()
  return {
    props: { contacts: JSON.parse(JSON.stringify(contacts)) }
  }

}

export default ContactMsg