import express from "express";
import coursesController from "../controllers/courses.controller.js";
const coursesRouter = express.Router();

coursesRouter.post("/", coursesController.addCourse);

coursesRouter.get("/", coursesController.getCourses);

coursesRouter.get("/:courseId", coursesController.getCourseById);

coursesRouter.patch("/:courseId", coursesController.updateCourseById);
         
coursesRouter.delete("/:courseId", coursesController.deleteCourseById);
                                 
export default coursesRouter;
