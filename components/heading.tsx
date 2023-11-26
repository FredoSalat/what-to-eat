import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-semibold items-center mb-2 text-lg">{children}</h3>
  );
}
