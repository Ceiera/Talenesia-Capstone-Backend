import CoursesModel from "../models/courses.model.js";
import { nanoid } from "nanoid";

const addCourse = async (payload) => {
  try {
    const course = new CoursesModel({
      courseId: nanoid(12),
      courseName: payload.courseName,
      courseDescription: payload.courseDescription,
      learningTrackId: payload.learningTrackId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      softDeleted: false,
    });
    const newCourse = await course.save();
    return newCourse;
  } catch (error) {
    return "Server Error";
  }
};

const getAllCourses = async () => {
  try {
    const courses = await CoursesModel.find();
    return courses;
  } catch (error) {
    return "Server Error";
  }
};

const getCourseById = async (id) => {
  try {
    const course = await CoursesModel.findOne({
      courseId: id,
    });
    if (!course) {
      return "Not Found";
    }
    return course;
  } catch (error) {
    return "Server Error";
  }
};

const updateCourseById = async (id, course) => {
  try {
    const findCourseById = await CoursesModel.findOne({
      courseId: id,
    });
    if (!findCourseById) {
      return "Not Found";
    }
    const payload = {
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      learningTrackId: course.learningTrackId,
    };
    payload.updatedAt = Date.now();
    const updatedCourse = await CoursesModel.findOneAndUpdate(
      { courseId: id },
      payload,
      { new: true }
    );
    return updatedCourse;
  } catch (error) {
    return "Server Error";
  }
};

const deleteCourseById = async (id) => {
  try {
    const findCourseById = await CoursesModel.findOne({
      courseId: id,
    });
    if (!findCourseById) {
      return "Not Found";
    }
    const deleteCourse = await CoursesModel.findOneAndDelete({
      courseId: id,
    });
  } catch (error) {
    return "Server Error";
  }
};

const coursesService = {
  addCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};

export default coursesService;
