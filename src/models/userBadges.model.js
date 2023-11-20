import mongoose from "mongoose";

const userBadgesSchema = new mongoose.Schema({
  userBadgesId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  listBadges: {
    type: [
      {
        badgeId: {
          type: String,
          required: true,
        },
        subCourseId: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
        }
      }
    ],
    required: true,
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

const UserBadgesModel = mongoose.model("userbadges", userBadgesSchema);
export default UserBadgesModel;
