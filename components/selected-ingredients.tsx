"use client";

import { useSelectedIngredientsContext } from "@/context/selected-ingredients-context";
import React from "react";

export default function SelectedIngredients() {
  const { ingredients } = useSelectedIngredientsContext();

  return (
    <div className="mb-6">
      <h3 className="font-semibold items-center mb-2 text-lg">
        Selected ingredients
      </h3>
      <ul className="flex flex-wrap  gap-2 text-lg text-gray-800">
        {ingredients.map((selectedIngredient, index) => (
          <li
            key={index}
            className="border bg-white/5 border-black/[0.1]  px-5 py-3"
          >
            {selectedIngredient}
          </li>
        ))}
      </ul>
    </div>
  );
}
