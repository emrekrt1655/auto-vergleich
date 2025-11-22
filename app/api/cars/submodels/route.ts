import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const make = searchParams.get("make");
  const model = searchParams.get("model");

  if (!make || !model) {
    return NextResponse.json(
      { error: "Missing make or model parameter" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://carapi.app/api/submodels/v2?make=${make}&model=${model}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

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
