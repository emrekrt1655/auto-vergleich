import { Lightbulb } from "lucide-react";

interface Props {
  summary: string;
  recommendation: string;
}

export default function ResultsSummaryCard({ summary, recommendation }: Props) {
  return (
    <div className="bg-linear-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500 rounded-full text-white">
          <Lightbulb size={24} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            KI-Empfehlung
          </h2>
          <p className="text-gray-800 mb-3">{summary}</p>
          <p className="font-semibold text-blue-700">{recommendation}</p>
        </div>
      </div>
    </div>
  );
}
