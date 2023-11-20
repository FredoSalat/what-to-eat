import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <h1 className="p-4 font-bold text-2xl">What to eat!?</h1>
      <ul className="p-4">
        <li className="font-semibold">My pantry</li>
      </ul>
    </div>
  );
}
