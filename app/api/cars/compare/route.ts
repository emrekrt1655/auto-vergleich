// app/api/compareCars/route.ts
import { NextResponse } from "next/server";
import { compareCarsWithAI } from "@/services/openaiService";

export async function POST(req: Request) {
  try {
    const { car1, car2 } = await req.json();

    if (!car1 || !car2) {
      return NextResponse.json(
        { error: "Beide Fahrzeuge müssen angegeben werden." },
        { status: 400 }
      );
    }

    const result = await compareCarsWithAI(car1, car2);
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Fehler in compareCars route:", error);
    return NextResponse.json(
      { error: "Fehler beim Abrufen der Vergleichsdaten." },
      { status: 500 }
    );
  }
}
