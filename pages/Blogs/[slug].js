import { useRouter } from 'next/router'
import mongoose from 'mongoose'
import Blog from '../../model/blog'
import Comment from '../../model/comment'
import { IoIosSend } from 'react-icons/io'
import { useState } from 'react'

const Post = ({ blogs, comments }) => {
    const router = useRouter()
    const { slug } = router.query

    const [body, setBody] = useState('')
    const [post, setPost] = useState('')
    const [name, setName] = useState('')

    const handler = async (e) => {
        e.preventDefault()
        const data = { body, post, name }
        try {
            const res = await fetch('/api/AddComment', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': "application/json"
                }
            }).then(res => { router.push(`/Blogs/${slug}`) })
        } catch (error) {
            console.log(error)
        }

    }

    let allCom = []
    let my;

    return (
        <div>
            {blogs.map((blog) => {
                if (blog.slug == slug) {
                    return <div>
                        <div key={blog._id}>
                            <div className='m-auto rounded-lg w-4/5 md:pb-20 pb-12 pt-20 md:pt-0'>
                                <img src={blog.img} alt="" />
                            </div>
                            <h1 className='md:text-4xl md:font-bold md:pl-32 md:pb-20 font-bold text-xl m-5 mb-10'>{blog.title}</h1>
                            <p className='md:text-xl font-semibold md:px-32 md:pb-20  text-lg m-5'>{blog.desc}</p>
                            <p className='px-32 pb-20 text-3xl'>Comments</p>
                            <form className='justify-center items-center md:justify-start md:items-start mb-20 mx-7' onSubmit={handler}>
                                <input type="text" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} className='focus:outline-none border-black md:text-lg border-b md:w-1/4 w-3/4 md:ml-32 md:mb-12 mb-6 block' />
                                <input onChange={(e) => setBody(e.target.value)} value={body} type="text" className='focus:outline-none border-black md:text-lg border-b md:w-1/2 w-3/4 md:ml-32 md:mb-12' placeholder='Post a comment' />
                                <button type="submit" onClick={(e) => setPost(blog.slug)}>
                                    <IoIosSend className='text-3xl text-blue-500' />
                                </button>
                            </form>
                        </div>
                    </div>
                }
            })}
            <div className='pb-10'>
                {comments.map((comment) => {
                    if (comment.post == slug) {
                        allCom.push(comment)
                        my = allCom.reverse()
                    }
                })}
                <div>
                   {my.map((c)=>{
                    return <div className='w-3/4 h-full bg-gray-300 md:ml-32 rounded-xl md:mb-2 my-2 mx-2'>
                    <div className='flex  items-center'>
                        <div className='bg-blue-500 text-lg rounded-full w-10 h-10 flex justify-center items-center text-white md:ml-8 md:my-2 mx-1 my-1 shadow-xl'>
                            {c.name[0]}
                        </div>
                        <div className='text-xl font-semibold pl-2'>
                            {c.name}
                        </div>
                    </div>
                    <div className='text-xl font-semibold md:pl-20 md:pb-3 mx-2 my-1 pb-1'>
                        {c.body}
                    </div>
                </div>
                   })
                   }
                </div>
            </div>
        </div >
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let blogs = await Blog.find()
    let comments = await Comment.find()
    return {
        props: {
            blogs: JSON.parse(JSON.stringify(blogs)),
            comments: JSON.parse(JSON.stringify(comments))
        }
    }
}

export default Post