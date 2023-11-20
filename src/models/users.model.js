import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userEmailVerifiedAt: {
    type: Date,
  },
  userFullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userAvatar: {
    type: String,
    required: true,
    default: "https://placehold.co/600x400.png",
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

const UsersModel = mongoose.model("users", usersSchema);

export default UsersModel;
