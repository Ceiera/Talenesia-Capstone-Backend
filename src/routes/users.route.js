import express from "express";
import usersController from "../controllers/users.controller.js";
import authMiddleware from "../middleware/auths.middleware.js";

const router = express.Router();

//ADD USER
router.post("/", usersController.addUser);

//GET ALL USERS
router.get("/", usersController.getAllUsers);

router.get("/email", usersController.getUserByEmail);

router.get("/fullname", usersController.getUserByFullname);

router.get("/username", usersController.getUserByUsername);

router.get(
  "/userlibraries",
  authMiddleware.verifyTokenUser,
  usersController.getUserLibraries
);

router.get(
  "/userbadges",
  authMiddleware.verifyTokenUser,
  usersController.getUserBadges
);

router.get(
  "/userprogress",
  authMiddleware.verifyTokenUser,
  usersController.getUserProgressByBatchId
);

router.get(
  "/usersubmission",
  authMiddleware.verifyTokenUser,
  usersController.getUserSubmission
);

router.get(
  "/userId",
  usersController.getUserBadgesByUserId
);

router.get("/:userId", usersController.getUserByUserId);

router.patch("/:userId", usersController.updateUserById);

router.delete("/:userId", usersController.deleteUserById);



const usersRoute = router;
export default usersRoute;
