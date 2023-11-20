import coursesController from "../controllers/courses.controller.js";
import express from "express";

const coursesRouter = express.Router();

coursesRouter.post("/", coursesController.addCourse);

coursesRouter.get("/", coursesController.getAllCourses);

coursesRouter.get("/:courseId", coursesController.getCourseById);

coursesRouter.patch("/:courseId", coursesController.updateCourseById);

coursesRouter.delete("/:courseId", coursesController.deleteCourseById);

export default coursesRouter;
