import { NextResponse } from "next/server";

type FetchPoints = {
  endpoint: string;
  params?: Record<string, string>;
};

export async function fetchCarApiData({ endpoint, params }: FetchPoints) {
  const baseUrl = "https://carapi.app/api";

  const query = params ? `?${new URLSearchParams(params).toString()}` : "";

  try {
    const res = await fetch(`${baseUrl}/${endpoint}${query}`, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
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
