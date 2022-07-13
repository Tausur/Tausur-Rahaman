import Community from '../../model/Community'
import connectDB from '../../util/mongo'

const handler = async(req,res)=>{
    if(req.method == 'POST'){
        let addCommunity = new Community({
            post : req.body.post,
            isImg : req.body.isImg,
            img : req.body.img,
            date : req.body.date,
            comment : req.body.comment,
        })
        await addCommunity.save()
        res.status(200).json({success : "Added this post to the Community"})
    }else{
        res.status(404).json({error : "This method is not allowed"})
    }
}

export default connectDB(handler)