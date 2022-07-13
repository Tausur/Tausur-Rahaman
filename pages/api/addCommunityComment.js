import Community from '../../model/Community'
import connectDB from '../../util/mongo'

const handler = async (req,res)=>{
    if(req.method == 'POST'){
        let com = await Community.findByIdAndUpdate(req.body.id , req.body)
        res.status(200).json({success : "Comment posted"})
    }else{
        res.status(404).json({error : "This method is not allowed"})
    }
}

export default connectDB(handler)