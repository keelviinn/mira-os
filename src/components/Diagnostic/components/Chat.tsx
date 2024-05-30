"use client";

import { useState } from "react";

import Button from "@/components/Button/Button";

interface Props {
  chat: { sender: boolean; message: string }[];
  view: { id: string };
}

export default function Chat({ chat, view }: Props) {
  const [chatMessages] = useState(chat);

  return (
    <>
      <div className="border-t border-[#dee2e6] pt-4 mt-4">
        {chatMessages.map((chat, i) => (
          <div
            key={i}
            className={`py-2 px-4 rounded-md mb-2 ${
              chat.sender ? "bg-[#e9f7fe]" : "bg-[#f8f9fa]"
            }`}
          >
            {chat.sender
              ? "Patient"
              : view.id === "care_navigator"
              ? "Care Navigator"
              : "Provider"}{" "}
            : {chat.message}
          </div>
        ))}
      </div>

      <form action="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="form-control input-height"
          />
          <Button variant="secondary" type="submit" onClick={() => {}}>
            Send Message
          </Button>
        </div>
      </form>
    </>
  );
}
