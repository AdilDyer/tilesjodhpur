import { NextRequest, NextResponse } from "next/server";
import Product from "../../../lib/models/product";
import dbConnect from "../../../lib/dbConnect";
import { ObjectId } from "mongodb";
export async function DELETE(
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
    const objectId = new ObjectId(id);
    const result = await Product.findByIdAndDelete(objectId);
    if (!result) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
