import { NextRequest, NextResponse } from "next/server";
import Product from "../../lib/models/product";
import dbConnect from "../../lib/dbConnect";
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    // Parsing the request body
    // Parsing the request body to extract product details
    const {
      name,
      price,
      description,
      brand,
      images,
      categories,
      colors,
      finishing,
      designs,
      sizes,
      materials,
      applicationAreas,
      isPremium,
    } = await req.json();

    // Validate if all required fields are present
    if (!name || !price || !brand || !images || images.length === 0) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields" },
        { status: 400 }
      );
    }

    // Check if the product already exists in the database
    const existingProduct = await Product.findOne({
      name: name,
    });

    if (existingProduct) {
      // If product exists, update the existing product
      existingProduct.price = price || existingProduct.price;
      existingProduct.description = description || existingProduct.description;
      existingProduct.brand = brand || existingProduct.brand;
      existingProduct.images = images || existingProduct.images;
      existingProduct.categories = categories || existingProduct.categories;
      existingProduct.colors = colors || existingProduct.colors;
      existingProduct.finishing = finishing || existingProduct.finishing;
      existingProduct.designs = designs || existingProduct.designs;
      existingProduct.sizes = sizes || existingProduct.sizes;
      existingProduct.materials = materials || existingProduct.materials;
      existingProduct.applicationAreas =
        applicationAreas || existingProduct.applicationAreas;
      existingProduct.isPremium = isPremium || existingProduct.isPremium;

      // Save the updated product
      await existingProduct.save();

      return NextResponse.json(
        { success: true, message: "Product updated successfully" },
        { status: 200 }
      );
    } else {
      // If product doesn't exist, create a new product
      const newProduct = new Product({
        name,
        price,
        description,
        brand,
        images,
        categories,
        colors,
        finishing,
        designs,
        sizes,
        materials,
        applicationAreas,
        isPremium,
      });

      // Save the product to the database
      await newProduct.save();

      // Respond with a success message
      return NextResponse.json(
        { success: true, message: "Product added successfully" },
        { status: 200 }
      );
    }
  } catch (error: unknown) {
    // Log the error and send a response with an error message
    console.error("Error submitting product:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
