import moongose from "mongoose";
import nanoid from "nanoid";
import bcrypt from "bcrypt";

const adminSchema = new moongose.Schema({
    adminId : {
        type: String,
        default: nanoid.nanoid(12),
        required: true
    },
    adminFullname: {
        type: String,
        required: true
    },
    adminUsername : {
        type: String,
        required: true
    },
    adminEmail: {
        type: String,
        required: true
    },
    adminPassword: {
        type: String,
        required: true
    },
    adminPhoneNumber:{
        type: String
    },
    adminAvatar:{
        type: String,
        default: "https://placehold.co/600x400.png"
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
    },
    softDeleted:{
        type: Boolean,
        default: false
    }

})