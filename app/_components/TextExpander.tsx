"use client";

import { useState } from "react";

interface TextExpanderProps {
  children: string | null; // allow null from DB
}

function TextExpander({ children }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(children);

  const safeText = children ?? "";
  const displayText = isExpanded
    ? safeText
    : safeText.split(" ").slice(0, 40).join(" ") + "...";
  console.log(displayText);
  return (
    <span>
      {displayText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
