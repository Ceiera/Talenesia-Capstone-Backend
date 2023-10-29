import {nanoid} from "nanoid";
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseId : {
        type: String,
        default: nanoid(12),
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