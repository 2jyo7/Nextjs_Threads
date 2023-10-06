import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    mongoose.set("strictQuery", true);


     if(!process.env.MongoDb_URL) {console.log("MongoDB connection is not available")}
    if (isConnected) {console.log(" MongoDB is already connected") };

    try {
        await mongoose.connect(process.env.MongoDb_URL!);

        isConnected = true;
        console.log(" MongoDB is connected");
    } catch (error: any) {
         console.log(error.message);
    }
}