import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import conversationRoutes from "./routes/conversation.routes.js"
import connectDB from "./config/db.js";
import { app,server } from "./socket/socket.js";

connectDB()


app.use(express.json());
app.use(express.urlencoded({ extended:true}))

app.use(cookieParser())

app.use("/v1/users", userRoutes);
app.use("/v1/conversations", conversationRoutes)

app.get("/", (req, res) => res.send("server is ready"));

app.use(notFound);
app.use(errorHandler);

server.listen(port, () => console.log(`server is Running at ${port}`));
