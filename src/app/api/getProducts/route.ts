import { NextRequest, NextResponse } from "next/server";
import Product from "../../lib/models/product";
import dbConnect from "../../lib/dbConnect";
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const products = await Product.find({});
    return NextResponse.json(products, { status: 200 });
  } catch (error: unknown) {
    console.error("Error finding products:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
