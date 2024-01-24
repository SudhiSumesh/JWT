const express=require('express')
const connectDb = require('./config/dbConnection')
const authRoutes=require('./Routes/auth')
const dotenv=require("dotenv").config()
const app=express()
const PORT =process.env.PORT ||3000

app.use(express.json())
//routes
app.use('/auth',authRoutes)
//server
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
    connectDb()
}
)