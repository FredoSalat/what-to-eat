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
            className={`borde border-black/[0.1] px-5 py-3 cursor-pointer  transition-colors duration-100 ${
              ingredients.includes(ingredient)
                ? "bg-blue-300 hover:bg-blue-400"
                : "hover:bg-zinc-200 bg-white/5"
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
