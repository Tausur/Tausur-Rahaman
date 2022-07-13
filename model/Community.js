const mongoose = require('mongoose')

const communitySchema = new mongoose.Schema({
    post : {type : String , require : true},
    isImg : {type : String},
    img : {type : String},
    date : {type : String},
    comment : [{
        name : {type : String},
        msg : {type : String}
    }]
    
},{timestamps : true})

export default mongoose.models.aicommunity || mongoose.model("aicommunity",communitySchema);