const mongoose = require('mongoose')

const communitySchema = new mongoose.Schema({
    post : {type : String , require : true},
    img : {type : String},
    like : {type : Number},
    comment : {type : String}
},{timestamps : true})

export default mongoose.models.Community || mongoose.model("Community",communitySchema);