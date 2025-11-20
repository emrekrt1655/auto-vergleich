import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://carapi.app/api/models/v2", {
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "CarAPI request failed", status: res.status },
        { status: res.status }
      );
    }

    const json = await res.json();
    return NextResponse.json(json.data);
  } catch (error) {
    console.error("CarAPI fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
