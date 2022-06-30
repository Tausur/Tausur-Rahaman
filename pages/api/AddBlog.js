import Blog from '../../model/blog'
import connectDB from '../../util/mongo'

const handler = async (req,res) =>{
    if(req.method == 'POST'){
        let addBlog = new Blog({
            slug: req.body.slug,
            title:req.body.title,
            desc:req.body.desc,
            img:req.body.img
        })
        await addBlog.save()
        res.status(200).json({success: "success"})
    }
    else{
        res.status(404).json({error: "This method is not allowed"})
    }
  }

export default connectDB(handler)