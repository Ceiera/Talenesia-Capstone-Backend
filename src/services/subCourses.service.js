import SubCoursesModel from "../models/subCourses.model.js";
import { nanoid } from "nanoid";

const addSubCourse = async (subCourse) => {
  try {
    const futureDate = new Date(currentDate);
    const DefaultCloseDate = futureDate.setFullYear(currentDate.getFullYear() + 1);
    const newSubCourse = new SubCoursesModel({
      subCourseId: nanoid(12),
      subCourseName: subCourse.subCourseName,
      subCourseMaterial: subCourse.subCourseMaterial,
      subCourseType: subCourse.subCourseType,
      courseId: subCourse.courseId,
      openDate: subCourse.openDate || Date.now(),
      closeDate: subCourse.closeDate || DefaultCloseDate,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const addedSubCourse = await newSubCourse.save();
    return addedSubCourse;
  } catch (error) {
    return "Server Error";
  }
};

const getAllSubCourses = async () => {
  try {
    const subCourses = await SubCoursesModel.find();
    return subCourses;
  } catch (error) {
    return "Server Error";
  }
};

const getSubCourseById = async (id) => {
  try {
    const subCourse = await SubCoursesModel.findOne({
      subCourseId: id,
    });
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
    const futureDate = new Date(currentDate);
    const DefaultCloseDate = futureDate.setFullYear(currentDate.getFullYear() + 1);
    const payload = {
      subCourseName: subCourse.subCourseName,
      subCourseMaterial: subCourse.subCourseMaterial,
      subCourseType: subCourse.subCourseType,
      courseId: subCourse.courseId,
      openDate: subCourse.openDate,
      closeDate: subCourse.closeDate
    };
    payload.updatedAt = Date.now();
    const updatedSubCourse = await SubCoursesModel.findOneAndUpdate(
      { subCourseId: id },
      payload,
      { new: true }
    );
    return updatedSubCourse;
  } catch (error) {
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
    return "Server Error";
  }
};

const subCoursesService = {
  addSubCourse,
  getAllSubCourses,
  getSubCourseById,
  updateSubCourseById,
  deleteSubCourseById,
};

export default subCoursesService;
