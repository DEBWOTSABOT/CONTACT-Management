import mongoose from "mongoose";

const salesOrderSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
});

const SalesOrder = mongoose.model("SalesOrder", salesOrderSchema);

export default SalesOrder;
