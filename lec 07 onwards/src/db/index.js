import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)//Singleton Builder Pattern 
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        // console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance}`);
        //atleast show output of this console.log()
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
        // https://nodejs.org/api/process.html
    }
}

export default connectDB