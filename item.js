import mongoose from "mongoose";

// Simple item to use to demonstrate the database functionality
const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);
