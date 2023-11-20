import { popularIngredients } from "@/lib/data";
import React from "react";

export default function IngredientSelector() {
  return (
    <React.Fragment>
      <h3 className="font-semibold items-center mb-2 text-lg">
        Popular ingredients...
      </h3>
      <ul className="flex flex-wrap  gap-2 text-lg text-gray-800">
        {popularIngredients.map((ingredient, index) => (
          <li
            className="border bg-white border-black/[0.1]  px-5 py-3"
            key={index}
          >
            {ingredient}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
