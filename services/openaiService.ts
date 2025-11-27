import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function compareCarsWithAI(car1: any, car2: any) {
const prompt = `
You are a car cost expert.

Compare the following two cars objectively based on:
- purchase price (EUR)
- fuel consumption (liters per 100 km)
- insurance costs (EUR)
- TÜV/inspection situation (EUR)
- maintenance and repair costs (EUR)
- depreciation (estimated resale value in EUR after planned usage period)

Estimate total ownership cost in EUR over the planned period.

Return your response strictly as a JSON object in this structure (values and comments in German):

{
  "summary": "Short summary in German",
  "recommendation": "Recommendation in German, which car is more cost-efficient and why",
  "cars": {
    "car1": {
      "fuelCostEUR": number,
      "fuelConsumptionL": number,
      "insuranceCostEUR": number,
      "maintenanceCostEUR": number,
      "tuvCostEUR": number,
      "estimatedResaleValueEUR": number,
      "totalCostEUR": number
    },
    "car2": {
      "fuelCostEUR": number,
      "fuelConsumptionL": number,
      "insuranceCostEUR": number,
      "maintenanceCostEUR": number,
      "tuvCostEUR": number,
      "estimatedResaleValueEUR": number,
      "totalCostEUR": number
    }
  },
  "comparison": {
    "fuelCost": "short German comment",
    "insuranceCost": "short German comment",
    "maintenanceCost": "short German comment",
    "resaleValue": "short German comment",
    "totalCost": "short German comment"
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
