import express from "express";
import subCoursesController from "../controllers/subCourses.controller.js";
const subCoursesRouter = express.Router();

subCoursesRouter.post("/", subCoursesController.addSubCourse);

subCoursesRouter.get("/", subCoursesController.getSubCourses);

subCoursesRouter.get("/:subCourseId", subCoursesController.getSubCourseById);

subCoursesRouter.patch("/:subCourseId", subCoursesController.updateSubCourseById);
         
subCoursesRouter.delete("/:subCourseId", subCoursesController.deleteSubCourseById);
                                 
export default subCoursesRouter;
