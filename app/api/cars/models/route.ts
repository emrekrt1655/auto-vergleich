import { fetchCarApiData } from "@/lib/service/fetchCarApiData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const make = searchParams.get("make");

  if (!make) {
    return new Response(JSON.stringify({ error: "Missing make parameter" }), {
      status: 400,
    });
  }

  return fetchCarApiData({
    endpoint: "models/v2",
    params: { make },
  });
}
