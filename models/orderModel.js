import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  email: { type: String, required: true },
 orderValue: { type: Number, required: true }
// status: { type: String, default: "Pending" }
});
const orderModel = mongoose.model("orders", orderSchema);
export default orderModel;
