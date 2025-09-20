// backend/Routes/userRoutes.js

import express from "express";
import { registerUser, loginUser, getUserOrders, adminlogin } from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get('/orders', authMiddleware, getUserOrders); // This route handles fetching user orders
userRouter.post("/admin", adminlogin);
export default userRouter;
 
