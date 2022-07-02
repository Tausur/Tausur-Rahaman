const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name : {type: String , require : true},
    email : {type : String , require : true},
    message : {type : String , require : true}
},{timestamps: true})

export default mongoose.models.Contact || mongoose.model("Contact",ContactSchema);