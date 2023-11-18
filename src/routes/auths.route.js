import express from "express";
import authsController from "../controllers/auths.controller.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (!(payload.email || payload.password)) {
      res
        .status(400)
        .send({ status: "error", message: "Missing Body", data: [] });
      return;
    }
    const result = await authsController.login(payload);
    if (result === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Not Found",
        data: [],
      });
    }
    if (result === "Incorrect Password") {
      return res.status(400).send({
        status: "error",
        message: "Incorrect Password",
        data: [],
      });
    }
    if (result === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(200).send({
      status: "success",
      message: "Login Success",
      data: {
        token: result,
      },
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

const authsRoute = router;
export default authsRoute;
