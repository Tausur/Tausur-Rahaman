import Blog from '../../model/blog'
import connectDB from '../../util/mongo'

const handler = async (req,res)=>{
    let blogs = await Blog.find()
    res.status(200).json({blogs})
}

export default connectDB(handler)