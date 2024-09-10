import mongoose from "mongoose";

const cadenceSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Cadence = mongoose.model("Cadence", cadenceSchema);

export default Cadence;
