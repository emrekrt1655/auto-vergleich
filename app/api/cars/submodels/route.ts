import { fetchCarApiData } from "@/lib/service/fetchCarApiData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const make = searchParams.get("make");
  const model = searchParams.get("model");

  if (!make || !model) {
    return new Response(
      JSON.stringify({ error: "Missing make or model parameter" }),
      { status: 400 }
    );
  }

  return fetchCarApiData({
    endpoint: "submodels/v2",
    params: { make, model },
  });
}
