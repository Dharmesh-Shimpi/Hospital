import app from "./index.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
async function connect () {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

app.listen(5000, () => {
    console.log("Server is running on port 5000");
    connect();
})