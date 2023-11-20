import mongoose from "mongoose";

const subCourseSchema = new mongoose.Schema({
  subCourseId: {
    type: String,
    required: true,
  },
  subCourseName: {
    type: String,
    required: true,
  },
  subCourseMaterial: {
    type: [{}],
    required: true,
  },
  subCourseType: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
});

const SubCoursesModel = mongoose.model("subcourses", subCourseSchema);

export default SubCoursesModel;
