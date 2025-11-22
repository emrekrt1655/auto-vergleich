import { fetchCarApiData } from "@/lib/service/fetchCarApiData";

export async function GET() {
  return fetchCarApiData({ endpoint: "makes/v2" });
}
