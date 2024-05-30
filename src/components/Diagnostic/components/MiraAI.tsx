import { MiraOSsummary } from "@/types";

interface Props {
  showMiraAI: boolean;
  setShowMiraAI: (showMiraAI: boolean) => void;
  view: {
    id: string;
  };
  miraOSsummary: MiraOSsummary;
}

export default function MiraAI({
  showMiraAI,
  setShowMiraAI,
  view,
  miraOSsummary,
}: Props) {
  return (
    <div className="mb-4">
      <div
        className="text-lg font-bold cursor-pointer mb-2"
        onClick={() => setShowMiraAI(!showMiraAI)}
      >
        Mira AI
      </div>
      <div
        className={`${
          showMiraAI && view.id === "provider" ? "block" : "hidden"
        } mt-4 `}
      >
        <p>
          <strong>Diagnosis:</strong> {miraOSsummary.dx[0].diagnosis}
        </p>
        <p>
          <strong>Probability:</strong> {miraOSsummary.dx[0].probability}
        </p>
        <p>
          <strong>ICD10CM Code:</strong> {miraOSsummary.dx[0].ICD10CMCode}
        </p>
        <p>
          <strong>Explanation:</strong> {miraOSsummary.rxExplanation}
        </p>
        <p>
          <strong>Recommended Rx:</strong>
        </p>
        <ul>
          {miraOSsummary.rxRecommendation.map((rx, i) => (
            <li key={i}>
              {rx.name}: {rx.dose}
            </li>
          ))}
        </ul>
        <p>
          <strong>Reasons for Dx:</strong> {miraOSsummary.reasonsForDx}
        </p>
      </div>
    </div>
  );
}
