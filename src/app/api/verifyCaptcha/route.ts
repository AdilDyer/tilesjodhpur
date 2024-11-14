import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parsing the request body
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { success: false, message: "No token provided" },
        { status: 400 }
      );
    }

    // Verify the captcha with Google's API
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

    // Making a POST request to Google's API to verify captcha
    const googleResponse = await fetch(verifyUrl, {
      method: "POST",
    });
    const data = await googleResponse.json();

    if (data.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: data["error-codes"] },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Error verifying CAPTCHA:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
