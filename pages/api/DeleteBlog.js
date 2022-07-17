import Blog from '../../model/blog'
import connectDB from '../../util/mongo'

const handler = async (req,res)=>{
  if(req.method == 'DELETE'){
      let blogs = await Blog.findByIdAndDelete(req.body.id)
      res.status(200).json({success : "Blog has been successfully deletes"})
  }else{
      res.status(404).json({error : "This method is not allowed"})
  }
}

export default connectDB(handler)