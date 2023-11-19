import {nanoid} from "nanoid";
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseId : {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
    },
    learningTrackId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
    softDeleted: {
        type: Boolean,
        default: false
    }
})

const courseModel = mongoose.model("courses", courseSchema);

export default courseModel