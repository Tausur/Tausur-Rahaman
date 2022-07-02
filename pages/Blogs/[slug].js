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
                            <h1 className='text-4xl font-bold pl-32 pb-20'>{blog.title}</h1>
                            <p className='text-xl font-semibold px-32 pb-20'>{blog.desc}</p>
                            <p className='px-32 pb-20 text-3xl'>Comments</p>
                            <form className='flex' onSubmit={(e) => {
                                e.preventDefault()
                                commentArray.push(comment)
                            }}>
                                <input onChange={(e) => setComment(e.target.value)} value={comment} type="text" className='ml-32 mb-5 focus:outline-none border-black text-lg border-b w-96' placeholder='Post a comment' />
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