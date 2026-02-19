import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB= async()=>{
    try {
        const ci= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(ci.connection.host);
    } catch (error) {
        console.log("Failed to Connect the DataBase ! !",error);
        process.exit(1);
    }
}
export default connectDB;