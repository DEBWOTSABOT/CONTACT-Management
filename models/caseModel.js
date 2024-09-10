import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  status: { type: String, required: true },
});

const Case = mongoose.model("Case", caseSchema);

export default Case;
