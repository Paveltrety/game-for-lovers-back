import mongoose from "mongoose";

const Vulgars = new mongoose.Schema({
  id: { type: Number, required: true },
  text: { type: String, required: true },
});

export default mongoose.model("Vulgars", Vulgars);
