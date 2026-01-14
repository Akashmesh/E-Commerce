dotenv.config();
import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRoutes);

// CONNECT DB FIRST, THEN START SERVER
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`App is listening on port ${port}`);
    });
});
