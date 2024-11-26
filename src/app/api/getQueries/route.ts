import { NextRequest, NextResponse } from "next/server";
import Query from "../../lib/models/query";
import dbConnect from "../../lib/dbConnect";
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const Queries = await Query.find({});
    return NextResponse.json(Queries, { status: 200 });
  } catch (error: unknown) {
    console.error("Error finding queries:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
