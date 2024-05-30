"use client";

import { useState } from "react";

import { Data } from "@/types";
import { parseMiraCareOptionTitle } from "@/utils/parse";

import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import ChangeViewButton from "./components/ChangeViewButton";
import MiraAI from "./components/MiraAI";
import Content from "./components/Content";
import TreatmentPlan from "./components/TreatmentPlan";
import Chat from "./components/Chat";

interface Props {
  data: Data;
}

const views = [
  {
    id: "care_navigator",
    label: "Care Navigator View",
    switchTo: "Provider View",
  },
  {
    id: "provider",
    label: "Provider View",
    switchTo: "Care Navigator View",
  },
];

const chat = [
  {
    sender: true,
    message: "I have been feeling unwell for the past few days.",
  },
  {
    sender: false,
    message: "Can you describe your symptoms?",
  },
  {
    sender: true,
    message: "I have a runny nose, sore throat, and mild fever.",
  },
];

export default function Diagnostic({ data }: Props) {
  const {
    miraOSsummary,
    diagnostic,
    selfCareTips,
    visitIntake,
    miraCareOptions,
  } = data;

  const [view, setView] = useState(views[0]);
  const [showMiraAI, setShowMiraAI] = useState(false);

  function handleViewChange() {
    setView((prev) => (prev.id === views[0].id ? views[1] : views[0]));
  }

  function handleSendCareOptions() {
    window.alert(
      "Care options: In-person clinic, virtual care, labs, navigation."
    );
  }

  return (
    <Card
      title={view.label}
      button={<ChangeViewButton view={view} onClick={handleViewChange} />}
    >
      <div className={`border-b border-[#dee2e6] pb-4 mb-4`}>
        <h2>Chief Complaint</h2>
        <p>{miraOSsummary.chiefComplaint}</p>

        {view.id === "care_navigator" && (
          <>
            <h2>Condition Category</h2>
            <p>{miraOSsummary.conditionCategory}</p>

            <h2>Triage Level</h2>
            {miraOSsummary.triageLevel.map((level, i) => (
              <p key={i}>{level}</p>
            ))}

            <h2>Mira Care Options</h2>
            {miraCareOptions.map((option, i) => (
              <p key={i}>
                <span className="capitalize">
                  {parseMiraCareOptionTitle(option.careType[0])}:
                </span>{" "}
                {option.description}
              </p>
            ))}
          </>
        )}
      </div>

      {view.id === "provider" && (
        <MiraAI
          showMiraAI={showMiraAI}
          setShowMiraAI={setShowMiraAI}
          view={view}
          miraOSsummary={miraOSsummary}
        />
      )}

      <Content
        view={view}
        diagnostic={diagnostic}
        selfCareTips={selfCareTips}
        visitIntake={visitIntake}
      />

      <div
        className={`my-4 gap-2 ${
          view.id === "care_navigator" ? "flex" : "hidden"
        }`}
      >
        <Button variant="action" type="button" onClick={handleSendCareOptions}>
          Send Care Options
        </Button>
        <Button variant="danger" type="button" onClick={() => {}}>
          Cancel Order{" "}
        </Button>
      </div>

      {/* Treatment Plan */}
      <TreatmentPlan />

      {/* Message section */}
      <Chat chat={chat} view={view} />
    </Card>
  );
}
