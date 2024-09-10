import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
