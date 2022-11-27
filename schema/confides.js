import mongoose from "mongoose";

const Confides = new mongoose.Schema({
  id: { type: Number, required: true },
  text: { type: String, required: true },
});

export default mongoose.model("Confides", Confides);