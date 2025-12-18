import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const LANGUAGE_CONFIG = {
  en: {
    systemMessage: "You are a car expert that provides only JSON outputs, without any additional text. Respond in English.",
    languageInstruction: "English"
  },
  de: {
    systemMessage: "You are a car expert that provides only JSON outputs, without any additional text. Respond in German.",
    languageInstruction: "German"
  },
  tr: {
    systemMessage: "You are a car expert that provides only JSON outputs, without any additional text. Respond in Turkish.",
    languageInstruction: "Turkish"
  }
} as const;

export async function compareCarsWithAI(car1: any, car2: any, locale: string = "de") {
  const lang = (locale in LANGUAGE_CONFIG ? locale : "de") as keyof typeof LANGUAGE_CONFIG;
  const config = LANGUAGE_CONFIG[lang];

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

Return your response strictly as a JSON object in this structure (all text values and comments MUST be in ${config.languageInstruction}):

{
  "summary": "Short summary in ${config.languageInstruction}",
  "recommendation": "Recommendation in ${config.languageInstruction}, which car is more cost-efficient and why",
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
    "fuelCost": "short comment in ${config.languageInstruction}",
    "insuranceCost": "short comment in ${config.languageInstruction}",
    "maintenanceCost": "short comment in ${config.languageInstruction}",
    "resaleValue": "short comment in ${config.languageInstruction}",
    "totalCost": "short comment in ${config.languageInstruction}"
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
          content: config.systemMessage,
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