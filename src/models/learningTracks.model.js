import {nanoid} from "nanoid";
import mongoose from "mongoose";

const learningTrackSchema = new mongoose.Schema({
    learningTrackId : {
        type: String,
        default: nanoid(12),
        required: true
    },
    adminId : {
        type: String,
        required: true
    },
    learningTrackName: {
        type: String,
        required: true
    },
    learningTrackDescription: {
        type: String,
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