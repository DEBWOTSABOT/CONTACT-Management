import mongoose from "mongoose";

const purchaseOrderSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
});

const PurchaseOrder = mongoose.model("PurchaseOrder", purchaseOrderSchema);

export default PurchaseOrder;
