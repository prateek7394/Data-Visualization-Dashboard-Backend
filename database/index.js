import mongoose from "mongoose";
import { reportModel } from "../models/index.js";
import { data } from "../data/data.js";

// database connection
export const connection = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDb database is connected!");
        // Add data only one time
        // reportModel.insertMany(data);
    })
    .catch((error) => {
        console.log(error);
    });
}