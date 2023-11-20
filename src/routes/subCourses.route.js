import subCoursesController from "../controllers/subCourses.controller.js";
import express from "express";

const subCoursesRouter = express.Router();

subCoursesRouter.post("/", subCoursesController.addSubCourse);
subCoursesRouter.get("/", subCoursesController.getAllSubCourses);
subCoursesRouter.get("/:subCourseId/badges", subCoursesController.getBadgesBySubCourseId);
subCoursesRouter.get("/:subCourseId", subCoursesController.getSubCourseById);
subCoursesRouter.patch(
  "/:subCourseId",
  subCoursesController.updateSubCourseById
);
subCoursesRouter.delete(
  "/:subCourseId",
  subCoursesController.deleteSubCourseById
);

export default subCoursesRouter;