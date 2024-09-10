import mongoose from "mongoose";

const visitSchema = new mongoose.Schema({
  date: { type: Date, required: true },
});

const Visit = mongoose.model("Visit", visitSchema);

export default Visit;
