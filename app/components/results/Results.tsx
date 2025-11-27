import ResultsSummaryCard from "./ResultsSummaryCard";
import ComparisonTable from "./ComparisonTable";
import CostChart from "./CostChart";
import ComparisonInsights from "./ComparisonInsights";

interface ResultsProps {
  data: {
    summary: string;
    recommendation: string;
    cars: {
      car1: any;
      car2: any;
    };
    comparison: Record<string, string>;
  };
}

export default function Results({ data }: ResultsProps) {
  return (
    <div className="space-y-10 mt-16">
      <ResultsSummaryCard summary={data.summary} recommendation={data.recommendation} />
      <ComparisonTable cars={data.cars} />
      <CostChart cars={data.cars} />
      <ComparisonInsights comparison={data.comparison} />
    </div>
  );
}
