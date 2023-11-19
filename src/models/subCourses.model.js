import  {nanoid} from "nanoid";
import mongoose from "mongoose";

const subCourseSchema = new mongoose.Schema({
    subCourseId : {
        type: String,
        required: true
    },
    subCourseName: {
        type: String,
        required: true
    },
    subCourseMaterial: {
        type: Array,
        required: true
    },
    subCourseType: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
    },
    softDeleted: {
        type: Boolean,
        default: false
    }
})

const subCoursesModel = mongoose.model("subcourses", subCourseSchema);

export default subCoursesModel;
