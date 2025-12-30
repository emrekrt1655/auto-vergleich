import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const LANGUAGE_CONFIG = {
  en: {
    systemMessage: "You are a car cost analysis expert that provides only JSON outputs, without any additional text. Respond in English.",
    languageInstruction: "English"
  },
  de: {
    systemMessage: "You are a car cost analysis expert that provides only JSON outputs, without any additional text. Respond in German.",
    languageInstruction: "German"
  },
  tr: {
    systemMessage: "You are a car cost analysis expert that provides only JSON outputs, without any additional text. Respond in Turkish.",
    languageInstruction: "Turkish"
  }
} as const;

export async function compareCarsWithAI(car1: any, car2: any, locale: string = "de") {
  const lang = (locale in LANGUAGE_CONFIG ? locale : "de") as keyof typeof LANGUAGE_CONFIG;
  const config = LANGUAGE_CONFIG[lang];

  const prompt = `
You are an expert car cost analyst specializing in total cost of ownership calculations for the German market.

USAGE PARAMETERS:
- Annual distance: 15,000 km
- Planned usage period: 5 years
- Total distance: 75,000 km
- Current fuel prices in Germany: Petrol ~€1.80/L, Diesel ~€1.70/L

CALCULATION REQUIREMENTS:

1. FUEL COST (5 years / 75,000 km):
   - Formula: (75,000 / 100) × fuel consumption (L/100km) × fuel price per liter
   - Use actual consumption from car data
   - Use current German average fuel prices
   - Explain diesel vs petrol advantage over 75,000 km

2. INSURANCE COST (5 years):
   - Annual insurance cost × 5 years
   - Consider car age, power, and type

3. MAINTENANCE COST (5 years / 75,000 km):
   - Check last service date and mileage from car data
   - Calculate which services are due within next 75,000 km
   - Diesel typical services: Oil change every 15,000km, filters, DPF cleaning, timing belt if needed
   - Petrol typical services: Oil change every 15,000km, spark plugs, filters, timing belt if needed
   - List specific services needed with estimated costs
   - Total maintenance cost for 5 years

4. TÜV/INSPECTION (5 years):
   - Check when last TÜV was done
   - Calculate how many TÜV inspections needed in 5 years
   - TÜV every 2 years: ~€100-150 per inspection
   - Add potential repair costs if car is older

5. DEPRECIATION:
   - Current purchase price from car data
   - Estimate resale value after 5 years and 75,000 km additional mileage
   - Consider: brand, model, age, total mileage, condition, market demand
   - Depreciation = Purchase price - Estimated resale value

6. TOTAL COST OF OWNERSHIP (5 years):
   Formula: Purchase Price + Fuel (5y) + Insurance (5y) + Maintenance (5y) + TÜV (5y) - Estimated Resale Value
   
   This is the REAL total cost - how much money you will actually spend to own and use this car for 5 years.

SUMMARY REQUIREMENTS (in ${config.languageInstruction}):
Write a detailed 4-5 paragraph summary covering:

Paragraph 1: Introduction
- Compare [Car1 Brand Model Variant Year] vs [Car2 Brand Model Variant Year]
- State which is more cost-effective and by how much (€ difference)

Paragraph 2: Fuel Analysis
- Diesel vs Petrol comparison for 75,000 km
- Consumption rates and total fuel costs
- Which is more economical and why

Paragraph 3: Maintenance Analysis
- Last service information for both cars
- Which services are due within next 75,000 km
- Estimated maintenance costs and timeline
- Which car has lower maintenance burden

Paragraph 4: Depreciation & Resale Value
- Purchase prices
- Estimated resale values after 5 years
- Which car retains value better and why
- Depreciation amounts

Paragraph 5: Final Recommendation
- Total cost of ownership comparison
- Overall recommendation with reasoning
- Any additional considerations (reliability, features, etc.)

Return response strictly as JSON in this structure (ALL text in ${config.languageInstruction}):

{
  "summary": "Detailed 4-5 paragraph analysis as described above in ${config.languageInstruction}",
  "recommendation": "Clear recommendation with reasoning in ${config.languageInstruction}",
  "cars": {
    "car1": {
      "purchasePriceEUR": number,
      "fuelCostEUR": number (5 years total),
      "fuelConsumptionL": number (per 100km),
      "insuranceCostEUR": number (5 years total),
      "maintenanceCostEUR": number (5 years total),
      "maintenanceDetails": "detailed list of services needed in ${config.languageInstruction}",
      "tuvCostEUR": number (5 years total),
      "estimatedResaleValueEUR": number,
      "depreciationEUR": number,
      "totalCostOfOwnershipEUR": number (purchase + fuel + insurance + maintenance + tuv - resale)
    },
    "car2": {
      "purchasePriceEUR": number,
      "fuelCostEUR": number (5 years total),
      "fuelConsumptionL": number (per 100km),
      "insuranceCostEUR": number (5 years total),
      "maintenanceCostEUR": number (5 years total),
      "maintenanceDetails": "detailed list of services needed in ${config.languageInstruction}",
      "tuvCostEUR": number (5 years total),
      "estimatedResaleValueEUR": number,
      "depreciationEUR": number,
      "totalCostOfOwnershipEUR": number (purchase + fuel + insurance + maintenance + tuv - resale)
    }
  },
  "comparison": {
    "fuelCost": "detailed comparison in ${config.languageInstruction}",
    "insuranceCost": "detailed comparison in ${config.languageInstruction}",
    "maintenanceCost": "detailed comparison in ${config.languageInstruction}",
    "resaleValue": "detailed comparison in ${config.languageInstruction}",
    "totalCostOfOwnership": "detailed comparison with € difference in ${config.languageInstruction}"
  },
  "costDifferenceEUR": number (positive if car1 is cheaper, negative if car2 is cheaper)
}

Car 1: ${JSON.stringify(car1, null, 2)}
Car 2: ${JSON.stringify(car2, null, 2)}

IMPORTANT: 
- Use REAL calculations based on the data provided
- All costs must be for 5 years / 75,000 km period
- Total cost of ownership = purchase + all 5-year costs - resale value
- Be realistic with depreciation estimates
- ALL text fields must be in ${config.languageInstruction}
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: config.systemMessage,
        },
        { role: "user", content: prompt },
      ],
    });

    const jsonString = completion.choices[0].message.content!;
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("OpenAI comparison error:", error);
    throw new Error("Failed to compare cars");
  }
}