import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  type: { type: String, required: true },
  date: { type: Date, required: true },
});

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
