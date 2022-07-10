import React from 'react'
import { useState } from 'react'
import { BiLike, BiCommentDetail } from 'react-icons/bi'
import { AiTwotoneLike } from 'react-icons/ai'

const CommunityPost = ({ community }) => {
    const [like, setLike] = useState(false)
    return (
        <div>
            <div className='py-2 md:px-32 px-5 md:w-[1200px] m-auto'>
                <div className='bg-gray-800 rounded-xl md:pt-4 shadow-2xl'>
                    <div className='flex  items-center md:px-10 md:py-2 px-5 py-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <div className='md:text-xl text-lg font-semibold pl-2'>
                            Tausur Rahaman
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
                        <BiCommentDetail className='mx-8 cursor-pointer text-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityPost