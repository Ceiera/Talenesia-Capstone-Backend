import {nanoid}  from "nanoid";
import mongoose from "mongoose";

const userProgressSubCoursesSchema = new mongoose.Schema({
    userProgressId : {
        type: String,
        default: nanoid(12),
        required: true
    },
    subCourseId : {
        type: String,
        required: true
    },
    detail:{
        type: String
    },
    status:{
        type: String,
        default: "not finished"
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date
    },
    softDeleted:{
        type: Boolean,
        default: false
    }
})