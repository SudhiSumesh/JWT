const mongoose=require('mongoose')
// create db schema
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:true
    },password:{
         type:String,
         required:[true,"password required"]
    }
})
module.exports=mongoose.model('User',userSchema)