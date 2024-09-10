import mongoose from "mongoose";

const dealSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  stage: { type: String, required: true },
  close_date: { type: Date },
});

const Deal = mongoose.model("Deal", dealSchema);

export default Deal;
