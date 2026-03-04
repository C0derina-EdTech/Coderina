import { NextResponse } from "next/server";
import { sanityClient } from "../../utils/sanityClient";


export async function GET() {
  try {
    const query = `*[_type == "coderinaevents"] | order(date desc){
  _id,
  title,
 
  date,
  endDate,
  status,
  time,
  location,
  isOnline,
  image {
    asset->{
      _id,
      url
    }
  },
  description,
  category,
  registrationLink,
  isPast,
  _createdAt
}`;


    const events = await sanityClient.fetch(query);

    console.log("✅ events fetched from Sanity:", events.length);

    return NextResponse.json({
      success: true,
      count: events.length,
      data: events,
    });

  } catch (error) {
    console.error("❌ Blog API Error:", error);

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}