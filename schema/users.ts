import mongoose from "mongoose";

const Users = new mongoose.Schema({
  id: { type: Number, required: true },
  male: { type: String, required: true },
  female: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model("Users", Users);
