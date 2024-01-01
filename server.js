import express from "express";
import dotenv from "dotenv";
import connect from "./config/dbconnect";
import userRouter from "./routes/userRoute";
import noteRouter from "./routes/noteRouter";
import CustomError from "./utils/createError";
import errorHandlerModule from "./middleware/errorHandler";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config({ path: "config/config.env" });

//testing
// app.use("/api",(req,res,next)=>{
//     res.send("Hello World!")
// })

app.use("/api/users", userRouter);
app.use("/api/notes", noteRouter);
app.use(errorHandlerModule);

app.use("*", (req, res, next) => {
  const error = new CustomError("Invalid Route in this server.", 404);
  return next(error);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  connect();
  console.log("Server is connected on port 8080");
});
