const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    slug: {type: String , require: true, unique: true},
    title: {type: String, require: true},
    short: {type: String, require: true},
    desc: {type: String , require: true},
    img: {type: String , require: true},
    comment: {type : Array}
},{timestamps: true})

export default mongoose.models.AllBlogs ||mongoose.model("AllBlogs",BlogSchema);
