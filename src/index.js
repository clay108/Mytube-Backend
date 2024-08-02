//require('dotenv').config({path: './env})
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js";
import { app } from "./app.js";

import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`);
    })
    app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
    })
})
.catch((err)=>{
    console.log("Mongo DB connection failed!!!",err);
})


















/*
import express from "express"
const app = express()

;(async()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })
    }
    catch(error){
        console.error("ERROR:",error)
        throw error
    }
})()
    */