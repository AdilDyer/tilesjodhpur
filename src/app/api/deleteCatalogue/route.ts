import { NextRequest, NextResponse } from "next/server";
import Catalogue from "../../lib/models/catalogue";
import dbConnect from "../../lib/dbConnect";
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    // Parsing the request body
    const { url, name } = await req.json();
    if (!url || !name) {
      return NextResponse.json(
        { success: false, message: "No data provided" },
        { status: 400 }
      );
    }

    // Validate if all fields are filled
    if (!name || !url) {
      return NextResponse.json(
        { success: false, message: "Please fill all fields" },
        { status: 400 }
      );
    }

    // Saving the query to the database
    await Catalogue.deleteMany({ url, name });

    return NextResponse.json(
      { success: true, message: "Catalogue deleted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error deleting Catalogue:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
