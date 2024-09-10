import mongoose from "mongoose";

const attachmentSchema = new mongoose.Schema({
  filename: { type: String, required: true },
});

const Attachment = mongoose.model("Attachment", attachmentSchema);

export default Attachment;
