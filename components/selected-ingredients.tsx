"use client";

import { useSelectedIngredientsContext } from "@/context/selected-ingredients-context";
import Heading from "./heading";

export default function SelectedIngredients() {
  const { ingredients } = useSelectedIngredientsContext();

  return (
    <div className="mb-6">
      <Heading>Selected ingredients</Heading>
      <ul className="flex flex-wrap  gap-2 text-lg text-gray-800">
        {ingredients.map((selectedIngredient, index) => (
          <li
            key={index}
            className="border bg-white/5 border-black/[0.1] px-2 py-1"
          >
            {selectedIngredient}
          </li>
        ))}
      </ul>
    </div>
  );
}
