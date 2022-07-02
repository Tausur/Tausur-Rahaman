import connectDB from '../../util/mongo'
import Contact from '../../model/contact'

const handler = async (req,res) =>{
    const {method} = req

    if(method == 'POST'){
        try {
            const {name,email,message} = req.body
            const mess = await Contact.create({name,email,message})
            res.status(200).json({done : "Feedback sent"})
        } catch (error) {
            console.error(error)
        }
    }else{
        res.status(404).json({error : "This method is not allowed"})
    }
}

export default connectDB(handler)