import express from "express";
import authsController from "../controllers/auths.controller.js";
import authMiddleware from "../middleware/auths.middleware.js";
const authsRouter = express.Router();

authsRouter.post("/", authsController.login);

authsRouter.get("/", authMiddleware.verifyTokenUser, async (req, res) => {
  return res.status(200).send({
    auth: req.auth,
  });
});

export default authsRouter;
