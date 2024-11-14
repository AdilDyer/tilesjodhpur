import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    images: {
      type: [String],
    },
    price: {
      type: Number,
    },
    categories: {
      type: [String],
    },
    brand: {
      type: String,
    },
    stock: {
      type: Boolean,
    },
    colors: {
      type: [String],
    },
    finishing: {
      type: [String],
    },
    designs: {
      type: [String],
    },
    sizes: {
      type: [String],
    },
    materials: {
      type: [String],
    },
    applicationAreas: {
      type: [String],
    },
    isPremium: {},
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
