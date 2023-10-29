import express from "express";
import usersController from "../controllers/users.controller.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const user = await usersController.addUser(req.body)
        res.status(404).send({user})
    } catch (error) {
        return res.status(500).send({message: "Server Error"})
    }
})

const usersRoute = router;
export default usersRoute;