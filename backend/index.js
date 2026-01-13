dotenv.config();
import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDb from "./config/db.js";


app.get("/", (req, res) => {
    res.send("welcome to home");
})
app.listen(process.env.PORT, () => {
    console.log("App is Litening on port");
    connectDb();
})
