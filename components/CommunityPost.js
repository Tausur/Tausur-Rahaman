import React from 'react'
import { useState } from 'react'
import { BiLike, BiCommentDetail } from 'react-icons/bi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const CommunityPost = ({ community }) => {

    const [like, setLike] = useState(false)
    const [myCom, setMyCom] = useState('')
    const [name, setName] = useState('')
    const [msg, setMsg] = useState('')

    const handleComment = () => {
        if (myCom == false) {
            setMyCom(true)
        } else {
            setMyCom(false)
        }
    }

    const handler = async (e) => {
        e.preventDefault()
        const comment = community.comment
        comment.push({ name,msg })
        const id = community._id
        const data = { comment, id }
        let res = await fetch('/api/addCommunityComment', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json"
            }
        }).then(res => {
            if (res.ok) {
                toast.success("Comment send")
            } else {
                toast.error("Failed")
            }
        })
        console.log(comment)
    }

    return (
        <div>
            <ToastContainer />
            <div className='py-2 md:px-32 px-5 md:w-[1200px] m-auto'>
                <div className='bg-gray-800 rounded-xl md:pt-4 shadow-2xl'>
                    <div className='flex  items-center md:px-10 md:py-2 px-5 py-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <div className='md:text-xl text-lg font-semibold pl-2'>
                            Tausur Rahaman
                        </div>
                        <div className='m-auto md:pl-96'>
                            {community.date}
                        </div>
                    </div>
                    <div className='md:text-xl text-sm px-5 py-3'>
                        {community.post}
                    </div>
                    {
                        community.isImg == 'true' ? <img src={community.img} alt='' className='md:h-[500px] md:w-[500px] m-auto md:py-5 px-2 rounded-lg h-72 w-80' /> : <p></p>
                    }
                    <div className='flex items-center md:pl-5 md:py-2 md:pb-5 py-2'>
                        <div className='flex items-center'>
                            {like == false ? <BiLike className='md:text-2xl text-lg md:ml-5 cursor-pointer ml-8 mx-1' onClick={() => setLike(true)} /> : <BiLike className='text-blue-500 md:text-2xl text-lg md:ml-5 cursor-pointer ml-8 mx-1' onClick={() => setLike(false)} />
                            }
                        </div>
                        <BiCommentDetail className='mx-8 cursor-pointer text-2xl' onClick={handleComment} />
                    </div>
                    {myCom == true ? <div>
                        <div>
                            <form className='md:px-8 md:pt-2 md:pb-5' onSubmit={handler}>
                                <label className='text-xl font-semibold block pb-3 md:px-0 px-5 md:py-0 py-5'>Post a comment</label>
                                <div>
                                    <input type="text" className='block focus:outline-none border-b-2 bg-gray-800 text-lg w-1/2 md:my-4 my-2 md:mx-0 mx-5' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} />
                                    <div className='flex items-center'>
                                        <input type="text" className='focus:outline-none border-b-2 bg-gray-800 text-lg w-4/5 md:w-1/2 md:mx-0 ml-5 md:ml-0 md:mr-0 mr-2 md:my-0 my-2' placeholder='Your message' value={msg} onChange={(e) => setMsg(e.target.value)} />
                                        <button type='submit'>
                                            <RiSendPlaneFill className='text-xl text-green-500 cursor-pointer' />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className='text-lg md:px-8 md:pt-2 md:pb-2 px-5'>
                                <p className='text-xl font-semibold md:pt-3 md:py-0 py-2'>All Comments</p>
                                {community.comment.map((comment) => {
                                    return <div className='md:py-0 py-1'>
                                        <div className='flex items-center'>
                                            <div className='bg-blue-500 text-lg rounded-full w-10 h-10 flex justify-center items-center text-white md:ml-8 md:my-2 mx-1 my-1 shadow-xl'>
                                                {comment.name[0]}
                                            </div>
                                            <div className='text-xl font-semibold pl-2 text-white'>
                                                {comment.name}
                                            </div>
                                        </div>
                                        <div className='md:px-20 px-12'>
                                            {comment.msg}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                        : <p></p>}
                </div>
            </div>
        </div>
    )
}

export default CommunityPost