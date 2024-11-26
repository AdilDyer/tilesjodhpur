import { NextRequest, NextResponse } from "next/server";
import Product from "../../../lib/models/product";
import dbConnect from "../../../lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Product ID is missing" },
        { status: 400 }
      );
    }

    // Ensure the ID is valid before attempting to convert it
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      return NextResponse.json(
        { success: false, message: "Invalid Product ID format" },
        { status: 400 }
      );
    }

    const result = await Product.findById(objectId);
    if (!result) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, product: result },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error getting product:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
