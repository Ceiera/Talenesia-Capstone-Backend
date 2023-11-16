import express from "express";
import usersController from "../controllers/users.controller.js";

const router = express.Router();

//ADD USER
router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(
        payload.userRole ||
        payload.userEmail ||
        payload.userPassword ||
        payload.userFullName ||
        payload.userName
      )
    ) {
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

router.get("/email", async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).send({
        status: "error",
        message: "Missing Email Query",
        data: [],
      });
    }
    const user = await usersController.getUserByEmail(email);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Retrieved",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

router.get("/fullname", async (req, res) => {
  try {
    const fullname = req.query.fullname;
    if (!fullname) {
      return res.status(400).send({
        status: "error",
        message: "Missing Username Query",
        data: [],
      });
    }
    const user = await usersController.getUserByFullname(fullname);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Retrieved",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

router.get("/username", async (req, res) => {
  try {
    const username = req.query.username;
    if (!username) {
      return res.status(400).send({
        status: "error",
        message: "Missing Username Query",
        data: [],
      });
    }
    const user = await usersController.getUserByUsername(username);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Retrieved",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const id = req.params.userId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing UserId Query",
        data: [],
      });
    }
    const user = await usersController.getUserById(id);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Retrieved",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

router.patch("/:userId", async (req, res) => {
  try {
    const id = req.params.userId;
    const payload = req.body;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing UserId params",
        data: [],
      });
    }
    if (
      !(
        payload.userRole ||
        payload.userEmail ||
        payload.userPassword ||
        payload.userUsername ||
        payload.userFullName
      )
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const user = await usersController.updateUserById(id, payload);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (user === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Updated",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

router.delete("/:userId", async (req, res) => {
  try {
    const id = req.params.userId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing UserId params",
        data: [],
      });
    }
    const user = await usersController.deleteUserById(id);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (user === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Deleted",
      data: [],
    })
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
