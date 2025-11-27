import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function compareCarsWithAI(car1: any, car2: any) {
  const prompt = `
Compare the following two cars objectively based on price, fuel consumption,
insurance costs, depreciation, and maintenance expenses.

At the end, give a JSON object with the following structure:
{
  "summary": "Short human-readable summary of comparison",
    "recommendation": "Recommendation in German, which car is better and why",
  "criteria": {
    "price": "short comment about price comparison",
    "fuelConsumption": "short comment about fuel usage",
    "insurance": "short comment about insurance costs",
    "depreciation": "short comment about long-term value",
    "maintenance": "short comment about maintenance"
  }
}

Car 1: ${JSON.stringify(car1, null, 2)}
Car 2: ${JSON.stringify(car2, null, 2)}
`;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a car expert that provides only JSON outputs, without any additional text.",
        },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
    });

    const jsonString = completion.choices[0].message.content!;
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("OpenAI comparison error:", error);
    throw new Error("Failed to compare cars");
  }
}
