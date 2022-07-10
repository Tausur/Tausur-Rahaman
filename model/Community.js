const mongoose = require('mongoose')

const communitySchema = new mongoose.Schema({
    post : {type : String , require : true},
    isImg : {type : String},
    img : {type : String},
    comment : {type : String}
},{timestamps : true})

export default mongoose.models.allCommunity || mongoose.model("allCommunity",communitySchema);