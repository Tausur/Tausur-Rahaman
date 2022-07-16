import React from 'react'
import { useState,useEffect } from 'react'
import CommunityModel from '../model/Community'
import mongoose from 'mongoose'
import CommunityPost from '../components/CommunityPost'

const Community = ({ cmp }) => {
  
  return (
    <div className='bg-gray-700 text-white md:py-32 py-20'>
      {cmp.map((community)=> {
        return <CommunityPost community={community}/>
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let communities = await CommunityModel.find()
  let cmp = await communities.reverse()
  return {
    props: { cmp: JSON.parse(JSON.stringify(cmp))}
  }
}

export default Community