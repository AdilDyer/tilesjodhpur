import { NextRequest, NextResponse } from "next/server";
import Query from "../../lib/models/query";
import dbConnect from "../../lib/dbConnect";
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    // Parsing the request body
    const { data } = await req.json();

    if (!data) {
      return NextResponse.json(
        { success: false, message: "No data provided" },
        { status: 400 }
      );
    }

    const { name, email, phone, state, message } = data;

    // Validate if all fields are filled
    if (!name || !email || !phone || !state || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill all fields" },
        { status: 400 }
      );
    }

    // Saving the query to the database
    const query = await Query.insertMany(data);

    return NextResponse.json(
      { success: true, message: "Query saved successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error submitting query:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
