const  express =require("express")
const mongoose=require("mongoose")
const cors =require("cors")
require("dotenv").config()
const UserRouter=require("./Routes/Auth")
const TweetRouter=require("./Routes/Tweet")
const MulterRouter=require("./Routes/multer")
const app=express()
app.use(cors())
app.use(express.json())

const Url=process.env.Mongo_url
console.log(Url)

// global.__basedir = __dirname;

app.use(UserRouter)
app.use(TweetRouter)
app.use(MulterRouter)

mongoose.connect(Url)
.then(()=>{
    console.log("Databse Connected")
    app.listen(8070)
})
.catch(err=>console.log(err))

