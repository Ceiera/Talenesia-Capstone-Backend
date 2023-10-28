import nanoid from "nanoid";
import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    userId : {
        type: String,
        default: nanoid.nanoid(12),
        required: true
    },
    userEmail : {
        type: String,
        required: true
    },
    userEmailVerifiedAt : {
        type: Date
    },
    userFullName : {
        type: String,
        required: true
    },
    userName : {
        type: String,
        required: true
    },
    userPassword : {
        type: String,
        required: true
    },
    

})