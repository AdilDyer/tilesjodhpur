import mongoose from "mongoose";
const catalogueSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Catalogue ||
  mongoose.model("Catalogue", catalogueSchema);
