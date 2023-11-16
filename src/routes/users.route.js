import express from "express";
import usersController from "../controllers/users.controller.js";

const router = express.Router();

//ADD USER
router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (!(payload.userRole||payload.userEmail||payload.userPassword||payload.userFullName||payload.userName)) {
      res
        .status(400)
        .send({ status: "error", message: "Missing Body", data: [] });
      return;
    }
    const user = await usersController.addUser(req.body);
    if (user === "Server Error") {
      res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
      return;
    }
    res.status(201).send({
      status: "success",
      message: "User Succesfully Created",
      data: user,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});


//GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await usersController.getAllUsers();
    if (users === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Users Succesfully Retrieved",
      data: users,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

const usersRoute = router;
export default usersRoute;
