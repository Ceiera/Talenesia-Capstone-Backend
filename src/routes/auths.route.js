import express from "express";
import authsController from "../controllers/auths.controller.js";
const router = express.Router();

router.post("/login", (req, res) => {
  try {
    const result = authsController.login(req.body);
    switch (result) {
      case "Missing Body":
        res.status(400).send({
          message: result,
        });
        break;
      case "Server Error":
        res.status(500).send({
          message: result,
        });
        break;
      case "Invalid Password":
        res.status(401).send({
          message: result,
        });
      default:
        res.status(200).send({
          token: result,
        });
        break;
    }
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
});

const authsRoute = router;
export default authsRoute