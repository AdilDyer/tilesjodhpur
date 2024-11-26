import { NextRequest, NextResponse } from "next/server";
import Catalogue from "../../lib/models/catalogue";
import dbConnect from "../../lib/dbConnect";
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const allCatalogues = await Catalogue.find({});
    return NextResponse.json(allCatalogues, { status: 200 });
  } catch (error: unknown) {
    console.error("Error finding catalogues:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
