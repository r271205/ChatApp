import express from "express"
import { checkAuth, login, signup, upadateProfile } from "../controllers/user.controller.js";
import { protectRout } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/signup",signup);
userRouter.post("/login",login);
userRouter.put("/update-profile",protectRout,upadateProfile);
userRouter.get("/check",protectRout,checkAuth);

export default userRouter;
