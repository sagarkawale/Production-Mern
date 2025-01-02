import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "products", // Ensure "products" is the correct collection name in your MongoDB
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users", // Ensure "users" is the correct collection name in your MongoDB
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "Delivered", "Cancel"],
    },
  },
  { timestamps: true }
);
export default mongoose.model("Order", orderSchema);
