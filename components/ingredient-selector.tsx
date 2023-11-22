"use client";

import { useSelectedIngredientsContext } from "@/context/selected-ingredients-context";
import { popularIngredients } from "@/lib/data";
import { Ingredient } from "@/lib/types";
import React from "react";

export default function IngredientSelector() {
  const { setIngredients } = useSelectedIngredientsContext();
  const onIngredientClick = (ingredient: Ingredient) => {
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };
  return (
    <>
      <h3 className="font-semibold items-center mb-2 text-lg">
        Popular ingredients...
      </h3>
      <ul className="flex flex-wrap  gap-2 text-lg text-gray-800">
        {popularIngredients.map((ingredient, index) => (
          <li
            key={index}
            className="border bg-white/5 border-black/[0.1]  px-5 py-3 cursor-pointer hover:bg-zinc-200"
            onClick={() => onIngredientClick(ingredient)}
          >
            {ingredient}
          </li>
        ))}
      </ul>
    </>
  );
}
