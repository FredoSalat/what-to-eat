"use client";

import { useSelectedIngredientsContext } from "@/context/selected-ingredients-context";
import { popularIngredients } from "@/lib/data";
import { Ingredient } from "@/lib/types";
import React from "react";
import Heading from "./heading";

export default function IngredientSelector() {
  const { addIngredient, ingredients } = useSelectedIngredientsContext();
  const onIngredientClick = (ingredient: Ingredient) => {
    addIngredient(ingredient);
  };
  return (
    <>
      <Heading>Popular ingredients...</Heading>
      <ul className="flex flex-wrap  gap-2 text-lg text-gray-800">
        {popularIngredients.map((ingredient, index) => (
          <li
            key={index}
            className={`border bg-white/5 border-black/[0.1] px-5 py-3 cursor-pointer hover:bg-zinc-200 transition-colors duration-100 ${
              ingredients.includes(ingredient)
                ? "bg-blue-200 hover:bg-blue-300"
                : ""
            }`}
            onClick={() => onIngredientClick(ingredient)}
          >
            {ingredient}
          </li>
        ))}
      </ul>
    </>
  );
}
