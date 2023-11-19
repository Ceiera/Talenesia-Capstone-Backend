import SubCoursesModel from "../models/subCourses.model.js";
import { nanoid } from "nanoid";

const addSubCourse = async (subCourse) => {
  try {
    const newSubCourse = new SubCoursesModel({
      subCourseId: nanoid(12),
      subCourseName: subCourse.subCourseName,
      subCourseMaterial: subCourse.subCourseMaterial,
      subCourseType: subCourse.subCourseType,
    });
    await newSubCourse.save();
    return newSubCourse;
  } catch (error) {
    return 'Server Error';
  }
};

const getSubCourses = async () => {
  try {
    const subCourses = await SubCoursesModel.find();
    return subCourses;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const getSubCourseById = async (id) => {
  try {
    const subCourse = await SubCoursesModel.findOne({ subCourseId: id });
    if (!subCourse) {
      return "Not Found";
    }
    return subCourse;
  } catch (error) {
    return "Server Error";
  }
};

const updateSubCourseById = async (id, subCourse) => {
  try {
    const findSubCourseById = await SubCoursesModel.findOne({
      subCourseId: id,
    });
    if (!findSubCourseById) {
      return "Not Found";
    }
    subCourse.updatedAt = Date.now();
    const updatedSubCourse = await SubCoursesModel.findOneAndUpdate(
      { subCourseId: id },
      subCourse,
      { new: true }
    );
    return updatedSubCourse;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const deleteSubCourseById = async (id) => {
  try {
    const findSubCourseById = await SubCoursesModel.findOne({
      subCourseId: id,
    });
    if (!findSubCourseById) {
      return "Not Found";
    }
    const deletedSubCourse = await SubCoursesModel.findOneAndDelete({
      subCourseId: id,
    });
    return deletedSubCourse;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const subCoursesService = {
  addSubCourse,
  getSubCourses,
  getSubCourseById,
  updateSubCourseById,
  deleteSubCourseById,
};

export default subCoursesService;
