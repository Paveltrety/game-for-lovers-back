import mongoose from "mongoose";

const Acquaintances = new mongoose.Schema({
  id: { type: Number, required: true },
  text: { type: String, required: true },
});

export default mongoose.model("Acquaintances", Acquaintances);