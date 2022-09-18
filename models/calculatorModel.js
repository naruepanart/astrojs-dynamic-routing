import mongoose from "mongoose";

const CalculatorModel = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Calculator", CalculatorModel);
