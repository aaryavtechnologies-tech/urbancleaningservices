import { NextResponse } from "next/server";
import { generateBookingId } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, mobileNumber, serviceRequired, homeSize, preferredDate, locationArea, additionalRequirements } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const cleanMobile = (mobileNumber || "").replace(/\D/g, "");
    if (!cleanMobile || cleanMobile.length < 10) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!serviceRequired || typeof serviceRequired !== "string") {
      return NextResponse.json(
        { success: false, message: "Please select a cleaning service." },
        { status: 400 }
      );
    }

    const bookingId = generateBookingId();
    const timestamp = new Date().toISOString();

    const enquiryRecord = {
      bookingId,
      timestamp,
      fullName: fullName.trim(),
      mobileNumber: cleanMobile,
      serviceRequired,
      homeSize: homeSize || "Not specified",
      preferredDate: preferredDate || "Earliest available",
      locationArea: locationArea || "Bellandur / Bangalore",
      additionalRequirements: additionalRequirements || "",
      status: "Received & Queued for Direct Quote",
    };

    // Log the enquiry for record keeping
    console.log("[New Cleaning Enquiry Received]", enquiryRecord);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully. Our team will review your requirements.",
      bookingId,
      enquiry: enquiryRecord,
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your enquiry. Please try again." },
      { status: 500 }
    );
  }
}
