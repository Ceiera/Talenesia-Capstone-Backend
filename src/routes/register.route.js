import express from "express";
import registerController from "../controllers/register.controller.js";

const registerRouter = express.Router();

registerRouter.post("/", async (req, res) => {
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
      return res
        .status(400)
        .send({ status: "error", message: "Missing Body", data: [] });
    }
    const user = await registerController.registerUser(payload);
    if (user === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(201).send({
      status: "success",
      message: "User Succesfully Created",
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

export default registerRouter;