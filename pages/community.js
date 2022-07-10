import React from 'react'
import { useState } from 'react'
import CommunityModel from '../model/Community'
import mongoose from 'mongoose'
import CommunityPost from '../components/CommunityPost'

const Community = ({ communities }) => {

  const [like, setLike] = useState(false)

  return (
    <div className='bg-gray-700 text-white md:py-32 py-12'>
      {communities.map((community) => {
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
  return {
    props: { communities: JSON.parse(JSON.stringify(communities)) }
  }
}

export default Community