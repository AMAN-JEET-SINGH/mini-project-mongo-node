const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017")
const userSchema =mongoose.Schema({
    pictureUrl:String,
    name:String,
    about:String
})
module.exports=mongoose.model('user',userSchema)