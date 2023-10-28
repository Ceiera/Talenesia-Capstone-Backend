import  nanoid  from "nanoid";
import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
    roleId : {
        type: String,
        default: nanoid.nanoid(12),
        required: true
    },
    roleDescription: {
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

const rolesModel = mongoose.model("Roles", rolesSchema);

export default rolesModel