import mongoose from "mongoose";
const querySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    state: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Query || mongoose.model("Query", querySchema);
