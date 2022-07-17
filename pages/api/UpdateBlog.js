import Blog from '../../model/blog'
import connectDB from '../../util/mongo'

const handler = async (req,res)=>{
    if(req.method == 'POST'){
        let blogs = await Blog.findByIdAndUpdate(req.body.id,req.body)
        res.status(200).json({success : "Blog has been successfully updated"})
    }else{
        res.status(404).json({error : "This method is not allowed"})
    }
}

export default connectDB(handler)