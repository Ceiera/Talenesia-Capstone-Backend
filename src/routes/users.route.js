import express from "express";
import usersController from "../controllers/users.controller.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await usersController.addUser(req.body);
    if ("Server Error") {
      res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
      return;
    }
    res
      .status(201)
      .send({
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

const usersRoute = router;
export default usersRoute;
