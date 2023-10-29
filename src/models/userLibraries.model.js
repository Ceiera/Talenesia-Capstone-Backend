import {nanoid}  from "nanoid";
import mongoose from "mongoose";

const userLibrariesSchema = new mongoose.Schema({
    userLibrariesId: {
        type: String,
        default: nanoid(12),
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    batchId: {
        type: [String],
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