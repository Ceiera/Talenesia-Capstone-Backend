import express from "express";
import authsController from "../controllers/auths.controller.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const result = await authsController.login(req.body);
    switch (result) {
      case "Missing Body":
        res.status(400).send({ status: "error", message: result, data: [] });
        break;
      case "Server Error":
        res.status(500).send({ status: "error", message: result, data: [] });
        break;
      case "Invalid Password":
        res.status(401).send({ status: "error", message: result, data: [] });
        break;
      case "User Not Found":
        res.status(404).send({ status: "error", message: result, data: [] });
        break;
      default:
        res.status(200).send({
          status: "success",
          message: "Succesfully Login",
          data: { token: result },
        });
        break;
    }
  } catch (error) {
    res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

const authsRoute = router;
export default authsRoute;
