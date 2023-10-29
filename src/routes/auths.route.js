import express from "express";
import authsController from "../controllers/auths.controller.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const result = await authsController.login(req.body);
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
        break;
      case "User Not Found":
        res.status(404).send({
          message: result,
        })
        break;
      default:
        res.status(200).send({
          data: {token : result},
          message: "Success"
        });
        break;
    }
  } catch (error) {
    res.status(500).send({
      message: "Server Error",
    });
  }
});

const authsRoute = router;
export default authsRoute