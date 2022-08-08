import { Router } from "express";
import {
    listUserController,
    createUserController,
    retrieveUserController,
    updateUserController,
    deleteUserController,
} from "../controllers/user.controller";
import isAdmin from "../middleware/isAdmin.middleware";
import authenticationMiddleware from "../middleware/authentication.middleware";
import isAdmninOrOwner from "../middleware/isAdminOrOwner.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);

userRoutes.get("", isAdmin, listUserController);

userRoutes.get("/profile", authenticationMiddleware, retrieveUserController);

userRoutes.patch("/:uuid", isAdmninOrOwner, updateUserController);

userRoutes.delete("/:uuid", isAdmninOrOwner, deleteUserController);

export default userRoutes;
