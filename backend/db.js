const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();


const mongodb = "mongodb+srv://akhileshspujar163:sjb3oKIkp3VvsM2X@cluster0.uq9mqmu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongodb).then(()=>console.log("connected to mongodb successfully")).catch((err)=>console.log(err));

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        minLength:4,
        maxLength:30,
        trim:true
    },
    password:{
        type:String,
        require:true,
        minLength:6,
        maxLength:30,
    },
    firstname:{
        type:String,
        require:true,
        trim:true,
        minLength:4,
        maxLength:40,
    },
    lastName:{
        type:String,
        require:true,
        trim:true,
        minLength:4,
        maxLength:50
    }

})
const PhotoSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
    path:String,
    contentType: String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:"authenticatedUser",
    }
});

// const accountSchema = mongoose.Schema({
//     userId:{
//         type:mongoose.Schema.Types.ObjectId, ref:"User",
//         require:true,
//     },
// })
const User = mongoose.model("authenticatedUser",userSchema)
const Photos = mongoose.model("userPhotos",PhotoSchema)

module.exports={User,Photos};