import userLibrariesController from "../controllers/userLibraries.controller.js";
import express from "express";

const userLibrariesRouter = express.Router();

userLibrariesRouter.post("/", userLibrariesController.addUserLibrary);

userLibrariesRouter.get("/", userLibrariesController.getAllUserLibraries);

userLibrariesRouter.get("/:userLibraryId", userLibrariesController.getUserLibraryById);

userLibrariesRouter.delete("/:userLibraryId", userLibrariesController.deleteUserLibraryById);

export default userLibrariesRouter;
