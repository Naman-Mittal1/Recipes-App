import express from "express"
import cors from "cors"
import mongoose from "mongoose" 

import {userRouter} from "../routes/users.js"


const app = express();


app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)

mongoose.connect("mongodb+srv://javascript:MERNjavascript@cluster0.u4tfkhr.mongodb.net/Cluster0?retryWrites=true&w=majority")

app.listen(3001, (req,res)=>{
    console.log("Server Started")
})