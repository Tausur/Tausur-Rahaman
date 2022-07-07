import connectDB from '../../util/mongo'
import Comment from '../../model/comment'

const handler = async (req,res) =>{
    if(req.method == 'POST'){
        let addCom = new Comment({
            body : req.body.body,
            post : req.body.post,
            name : req.body.name
        })
        await addCom.save()
        res.status(200).json({success: "success"})
    }
    else{
        res.status(404).json({error: "This method is not allowed"})
    }
  }

export default connectDB(handler)