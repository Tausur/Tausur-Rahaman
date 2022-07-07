const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    body : {require : true , type : String},
    post : {type : String , require : true},
    name : {type : String , require : true}
},{timestamps: true})

export default mongoose.models.aComment ||mongoose.model("aComment",CommentSchema);