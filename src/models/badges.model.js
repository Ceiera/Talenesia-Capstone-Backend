import mongoose from "mongoose";

const badgesSchema = new mongoose.Schema({
  badgeId: {
    type: String,
    required: true,
  },
  badgeName: {
    type: String,
    required: true,
  },
  badgeDescription: {
    type: String,
    required: true,
  },
  badgeValue: {
    type: Number,
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

const BadgesModel = mongoose.model("badges", badgesSchema);

export default BadgesModel;
