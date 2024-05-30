"use client";

import { useState } from "react";

import { Diagnostic, VisitIntake } from "@/types";

import ToggleBox from "@/components/ToggleBox/ToggleBox";

interface Props {
  view: {
    id: string;
  };
  diagnostic: Diagnostic[];
  selfCareTips: string;
  visitIntake: VisitIntake[];
}

export default function Content({
  view,
  diagnostic,
  selfCareTips,
  visitIntake,
}: Props) {
  const [showDiagnostic, setShowDiagnostic] = useState(false);
  const [showSelfCareTips, setShowSelfCareTips] = useState(false);
  const [showIntake, setShowIntake] = useState(false);
  const [showPatientHistory, setShowPatientHistory] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <ToggleBox
          className={view.id === "care_navigator" ? "block" : "hidden"}
          title="Diagnostic"
          onClick={() => setShowDiagnostic(!showDiagnostic)}
        />
        <ToggleBox
          className={view.id === "care_navigator" ? "block" : "hidden"}
          title="Self-Care Tips"
          onClick={() => setShowSelfCareTips(!showSelfCareTips)}
        />
        <ToggleBox title="Intake" onClick={() => setShowIntake(!showIntake)} />
        <ToggleBox
          title="Patient History"
          onClick={() => setShowPatientHistory(!showPatientHistory)}
        />
      </div>

      <div
        className={`${
          showDiagnostic && view.id === "care_navigator" ? "block" : "hidden"
        } mt-4 `}
      >
        {diagnostic.map((d, i) => (
          <p key={i}>{d.name}</p>
        ))}
      </div>
      <div
        className={`${
          showSelfCareTips && view.id === "care_navigator" ? "block" : "hidden"
        } mt-4 `}
      >
        <p>{selfCareTips}</p>
      </div>
      <div className={`${showIntake ? "block" : "hidden"} mt-4 `}>
        {visitIntake
          .filter((v) => v.title)
          .map((v, i) => (
            <p key={i}>
              {v.title}: {v.value}
            </p>
          ))}
      </div>
      <div className={`${showPatientHistory ? "block" : "hidden"} mt-4 `}>
        <p>Coming soon...</p>
      </div>
    </>
  );
}
