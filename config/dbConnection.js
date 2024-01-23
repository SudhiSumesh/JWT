const mongoose=require("mongoose")
const connectDb=async ()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING,{useNewurlParser:true,useUnifiedTopology:true})
        console.log("db connected");
    }catch(err){
        console.log("error:",err);
    }
}
module.exports=connectDb