import userLibrariesController from "../controllers/userLibraries.controller.js";
import express from "express";

const userLibrariesRouter = express.Router();

userLibrariesRouter.get("/", async (req, res) => {
  try {
    const userLibraries = await userLibrariesController.getAllUserLibraries();
    if (userLibraries === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(200).send({
      status: "success",
      message: "User Libraries Succesfully Retrieved",
      data: userLibraries,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

userLibrariesRouter.get("/:userLibraryId", async (req, res) => {
  try {
    const id = req.params.userLibraryId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userLibraryId Query",
        data: [],
      });
    }
    const userLibrary = await userLibrariesController.getUserLibraryById(id);
    if (userLibrary === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (userLibrary === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Library Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Library Succesfully Retrieved",
      data: userLibrary,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

userLibrariesRouter.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (!payload.userId) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const newUserLibrary = await userLibrariesController.addUserLibrary(
      payload
    );
    if (newUserLibrary === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(201).send({
      status: "success",
      message: "User Library Succesfully Created",
      data: newUserLibrary,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

userLibrariesRouter.delete("/:userLibraryId", async (req, res) => {
  try {
    const id = req.params.userLibraryId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userLibraryId Params",
        data: [],
      });
    }
    const deletedUserLibrary =
      await userLibrariesController.deleteUserLibraryById(id);
    if (deletedUserLibrary === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (deletedUserLibrary === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Library Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Library Succesfully Deleted",
      data: [],
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

export default userLibrariesRouter;
