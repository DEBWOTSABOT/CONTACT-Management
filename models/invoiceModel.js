import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
