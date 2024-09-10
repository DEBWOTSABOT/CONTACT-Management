import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  date_sent: { type: Date, required: true },
});

const Email = mongoose.model("Email", emailSchema);

export default Email;
