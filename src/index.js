import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({path : './env'})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is listening on Port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("DataBase Connection Failed !!!" ,error);
})