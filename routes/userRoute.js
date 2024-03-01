import express from "express";
import {
  getAllUsers,
  addUser,
  searchByLoc,
  searchByName
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/addUser", addUser);
userRouter.get("/search/loc",searchByLoc);
userRouter.get("/search/name",searchByName);

export default userRouter;
