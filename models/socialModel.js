import mongoose from "mongoose";

const socialSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  activity: { type: String, required: true },
});

const Social = mongoose.model("Social", socialSchema);

export default Social;
