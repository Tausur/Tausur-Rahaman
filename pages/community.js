import React from 'react'
import { useState } from 'react'
import {BiLike,BiCommentDetail} from 'react-icons/bi'

const community = () => {
  return (
    <div className='bg-gray-700 text-white'>
      <div className='md:py-32 md:px-32 py-20 px-10'>
        <div className='bg-gray-800'>
          <div className='flex  items-center md:px-10 md:py-2 px-5 py-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <div className='md:text-xl text-lg font-semibold pl-2'>
              Tausur Rahaman
            </div>
          </div>
          <div className='md:text-xl text-lg px-10 py-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolor! Neque, officiis tempora odit inventore repellat voluptatem odio reiciendis voluptate temporibus non ullam id ipsum architecto aut assumenda fugiat nemo voluptates saepe vitae quaerat. Voluptatem laboriosam illo doloribus dignissimos porro? Maiores, sint, beatae officia iure libero odio deleniti consequuntur voluptates voluptatum quas magni, pariatur vel sunt quae quod dolorum rerum. Obcaecati quae sed dolores sapiente possimus magni, explicabo, suscipit corporis facilis debitis, libero temporibus distinctio ratione. Consequatur aliquam corrupti placeat, tenetur optio recusandae itaque odit atque minus! Quaerat dolores, dolore consequatur eligendi aperiam fuga dolorem velit natus quisquam maxime ducimus?
          </div>
          <div className='flex items-center md:pl-5 md:py-2 pb-5'>
            <div className='flex items-center'>
              <BiLike className='md:text-xl text-lg md:ml-5 cursor-pointer ml-8 mx-1'/>
              <p>1.2K</p>
            </div>
            <BiCommentDetail className='mx-8 cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default community