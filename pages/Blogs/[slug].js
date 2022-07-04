import { useRouter } from 'next/router'
import mongoose from 'mongoose'
import Blog from '../../model/blog'
import { IoIosSend } from 'react-icons/io'
import { useState } from 'react'
import axios from 'axios'

const Post = ({ blogs }) => {
    const router = useRouter()
    const { slug } = router.query

    const [comment, setComment] = useState('')

    const commentArray = []
    let Blog_comment;

    return (
        <div>
            {blogs.map((blog) => {
                if (blog.slug == slug) {
                    return <div>
                        <div key={blog._id}>
                            <div className='m-auto rounded-lg w-4/5 pb-20'>
                                <img src={blog.img} alt="" />
                            </div>
                            <h1 className='md:text-4xl md:font-bold md:pl-32 md:pb-20 font-bold text-xl m-5 mb-10'>{blog.title}</h1>
                            <p className='md:text-xl font-semibold md:px-32 md:pb-20  text-lg m-5'>{blog.desc}</p>
                            <p className='px-32 pb-20 text-3xl'>Comments</p>
                            <form className='flex' onSubmit={(e) => {
                                e.preventDefault()
                                commentArray.push(comment)
                            }}>
                                <input onChange={(e) => setComment(e.target.value)} value={comment} type="text" className='md:ml-32 md:mb-5 focus:outline-none border-black md:text-lg border-b md:w-96 m-8 w-72' placeholder='Post a comment' />
                                <button type="submit">
                                    <IoIosSend className='text-3xl text-blue-500' />
                                </button>
                            </form>
                            <div>
                            </div>
                        </div>
                    </div>
                }
            })}
        </div >
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let blogs = await Blog.find()
    return {
        props: { blogs: JSON.parse(JSON.stringify(blogs)) }
    }
}

export default Post