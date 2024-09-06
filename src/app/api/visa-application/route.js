import { NextResponse } from 'next/server';
import dbConnect from '../../utils/mongodb';
import VisaApplication from '../../../models/VisaApplication';

// To disable default body parsing by Next.js
export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req) {
  try {
    console.log("Starting database connection...");
    await dbConnect();

    const body = await req.json(); // Parse the request body
    const { name, dob, nationality, travelHistory } = body;

    // Create new visa application record
    const newApplication = new VisaApplication({
      name,
      dob,
      nationality,
      travelHistory,
    });

    await newApplication.save();

    return NextResponse.json({ success: true, data: newApplication });
  } catch (error) {
    console.error("Error in POST request:", error.message);
    return NextResponse.json({ success: false, error: error.message });
  }
}
