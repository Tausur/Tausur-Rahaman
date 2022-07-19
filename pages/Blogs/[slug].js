import { useRouter } from 'next/router'
import mongoose from 'mongoose'
import Blog from '../../model/blog'
import { IoIosSend } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Post = ({ blogs }) => {
	const router = useRouter()
	const { slug } = router.query

	const [body, setBody] = useState('')
	const [name, setName] = useState('')
	const [active, setActive] = useState(false)
	useEffect(() => {
	}, [active])

	let id;
	let comment;
	let myblog;
	let myarr = []

	com()

	async function com() {

		blogs.map((blog) => {
			if (blog.slug == slug) {
				let arr = blog.comment
				myarr = []

				for (let i = arr.length - 1; i >= 0; i--) {
					myarr.push(arr[i])
				}

				return myarr
			}
		})
	}

	const [mycom, setMycom] = useState(myarr)

	const handler = async (e) => {
		e.preventDefault()
		setActive(true)
		toast.success("Your comment has been added")
		comment.push({ name, body })
		const data = { comment, id }
			const res = await fetch('/api/AddBlogComment', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': "application/json"
				}
			})
		com()
		setMycom(myarr)
	}
	

	return (
		<div>
		<ToastContainer/>
			{blogs.map((blog) => {
				if (blog.slug == slug) {
					myblog = blog
					id = blog._id
					let text = myblog.desc.split("/N/")
					comment = blog.comment
					return <div>
						<div key={blog._id}>
							<div className='m-auto rounded-lg w-4/5 md:pb-20 pb-12 pt-20 md:pt-0'>
								<img src={blog.img} alt="" />
							</div>
							<h1 className='md:text-4xl md:font-bold md:pl-32 md:pb-20 font-bold text-xl m-5 mb-10'>{blog.title}</h1>
							{
								text.map((i)=>{
									return <>
										<p className='md:text-xl font-semibold md:px-32 md:pt-10  text-lg px-5'>{i}</p>
										<br></br>
									</>
								})
							}
							<p className='px-32 pb-20 text-3xl'>Comments</p>
							<form className='justify-center items-center md:justify-start md:items-start mb-12 mx-7' onSubmit={handler}>
								<input type="text" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} className='focus:outline-none border-black md:text-lg border-b md:w-1/4 w-3/4 md:ml-32 md:mb-12 mb-6 block' />
								<input onChange={(e) => setBody(e.target.value)} value={body} type="text" className='focus:outline-none border-black md:text-lg border-b md:w-1/2 w-3/4 md:ml-32 md:mb-12' placeholder='Post a comment' />
								<button type="submit">
									<IoIosSend className='text-3xl text-blue-500' />
								</button>
							</form>
							<p className='md:px-32 md:text-4xl text-2xl md:pb-12 pb-8 flex justify-center items-center'>All comments</p>
							<div className='md:mb-8 mb-8'>
								{mycom.map((com) => {
									return <div>
										<div className='flex  items-center md:my-1 my-1'>
											<div className='rounded-full bg-green-500 text-xl flex justify-center items-center md:h-10 md:w-10 h-9 w-9 md:ml-32 mr-2 ml-5'>
												{com.name[0]}
											</div>
											<div className='md:text-xl text-lg font-semibold'>
												{com.name}
											</div>
										</div>
										<div className='md:text-lg text-md md:pl-44 pl-16'>
											{com.body}
										</div>
									</div>
								})}
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
		props: {
			blogs: JSON.parse(JSON.stringify(blogs))
		}
	}
}

export default Post
