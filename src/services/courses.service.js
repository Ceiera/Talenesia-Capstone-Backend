import CoursesModel from "../models/courses.model.js";
import { nanoid } from "nanoid";

const addCourse = async (course) => {
  try {
    const newCourse = new CoursesModel({
      batchId: nanoid(12),
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      learningTrackId: course.learningTrackId,
    });
    await newCourse.save();
    return newCourse;
  } catch (error) {
    return 'Server Error';
  }
};

const getCourses = async () => {
  try {
    const courses = await CoursesModel.find();
    return courses;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const getCourseById = async (id) => {
  try {
    const course = await CoursesModel.findOne({ courseId: id });
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
    course.updatedAt = Date.now();
    const updatedCourse = await CoursesModel.findOneAndUpdate(
      { courseId: id },
      course,
      { new: true }
    );
    return updatedCourse;
  } catch (error) {
    console.log(error);
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
    const deletedCourse = await CoursesModel.findOneAndDelete({
      courseId: id,
    });
    return deletedCourse;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const coursesService = {
  addCourse,
  getCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};

export default coursesService;
