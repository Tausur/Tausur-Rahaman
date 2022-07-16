import React from 'react'
import Blog from '../../model/blog'

const AdminPage = ({blogs}) => {
  return (
    <div className='py-32'>Index</div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req ?.cookies || ""

  if(myCookie.token !== process.env.TOKEN){
    return{
      redirect:{
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