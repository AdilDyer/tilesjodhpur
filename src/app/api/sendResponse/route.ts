import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Query from "../../lib/models/query";
export async function POST(req) {
  try {
    let { userEmail, userName, response, query } = await req.json();
    console.log(userEmail, userName, response, query);
    const sendEmail = async (userEmail, userName, response, query) => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      let info = await transporter.sendMail({
        from: '"Student Welfare Committee" <swc.nss.nfsu@gmail.com>',
        to: `${userEmail}`,
        subject: `🙏 Thank You for Your Query – We're Here to Help! ${userName}.`,
        text: `Hi ${userName},\n\nWe hope you have a wonderful day ahead!\n\nHere is the response to your query : ${response}.\n\nBest Regards,\nThe Galaxy Tiles , Jodhpur`,
        html: `<h3 style="background-color:rgba(255, 192, 203, 0.72); border-radius:0.5rem; padding:2rem 2rem">Dear ${userName},<br><br>
    Thank you for reaching out to The Galaxy Tiles!<br> We appreciate you taking the time to contact us and value your interest in our products/services.<br><br><strong>Query Details</strong>: ${query}<br><br>Our Response:<br>
    ${response}<br><br>We hope this answers your question thoroughly. If you need any further assistance or have more questions, please don't hesitate to reply to this email or contact us at our website.<br><br>Thank you for choosing The Galaxy Tiles. We’re always here to assist you.<br><br>Warm regards, <br>
    The Galaxy Tiles, Jodhpur<br>
    https://www.thegalaxytiles.com</h3><br><br><img src="https://upload.wikimedia.org/wikipedia/en/9/96/National_Forensic_Sciences_University_Logo.png" alt="NFSU Logo" width="80" height="100"></img>`,
      });
    };
    sendEmail(userEmail, userName, response, query);

    await Query.findOneAndDelete({
      message: query,
      name: userName,
      email: userEmail,
    });
    return NextResponse.json({
      message: "Response sent successfully",
      status: 200,
    });
  } catch (error) {
    // Return error response in case of an exception
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
