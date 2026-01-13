import mongoose from "mongoose";
const URI = process.env.MONGODB_URI;


const connectDb = async() => {
    try {
        mongoose.connect.URI;
        console.log("mongodb connected");
    } catch (error) {
        console.log("database connection failed");
    }
}

export default connectDb;