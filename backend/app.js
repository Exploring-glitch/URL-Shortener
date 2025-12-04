import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import { redirectShortUrl } from "./src/controller/redirectController.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import { connectDb } from "./src/config/mongoConfig.js";
import cors from "cors"; 
import authRouter from "./src/routes/authRoute.js";
import shortUrlRouter from "./src/routes/shortUrlRoute.js";
import userRouter from "./src/routes/userRoute.js"
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";


//cross origin resource sharing (allows requests from frontend to backend)
app.use(cors({
    //origin: 'http://localhost:5173'
    origin: process.env.FRONTEND_URL, 
    credentials: true //allows cookies to be sent
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(attachUser)

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter);
app.use("/api/create", shortUrlRouter);
app.use("/:shortUrl", redirectShortUrl);


app.use(errorHandler); //global error handler

const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
    connectDb();
    console.log("Server is running on port 3000");
})
