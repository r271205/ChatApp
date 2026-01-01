import express from "express";
import { protectRout } from "../middleware/auth.js";
import { getMessages, getUsersForSidebar,markMessageAsSeen, sendMessages } from "../controllers/message.controller.js";


const messageRouter = express.Router();

messageRouter.get("/users",protectRout,getUsersForSidebar);
messageRouter.get("/:id",protectRout,getMessages);
messageRouter.put("/mark/:id",protectRout,markMessageAsSeen);
messageRouter.post("/send/:id",protectRout,sendMessages);

export default messageRouter;