"use client";

import { useSelectedIngredientsContext } from "@/context/selected-ingredients-context";
import { mostPopularIngredients } from "@/lib/recipeUtils";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function IngredientSelector() {
  const { addIngredient, ingredients } = useSelectedIngredientsContext();
  const popularIngredients = mostPopularIngredients();

  const [ingredientsShowing, setIngredientsShowing] = useState(
    popularIngredients.slice(0, 4)
  );
  const onIngredientClick = (ingredient: string) => {
    addIngredient(ingredient);
  };

  const onShowMoreClick = () => {
    const nextIngredients = popularIngredients.slice(
      ingredientsShowing.length,
      ingredientsShowing.length + 4
    );

    setIngredientsShowing((prevIngredients) => [
      ...prevIngredients,
      ...nextIngredients,
    ]);
  };
  const onShowLessClick = () => {
    setIngredientsShowing(popularIngredients.slice(0, 4));
  };
  return (
    <>
      <p className="font-semibold">Populära ingredienser</p>
      <ul className="flex flex-wrap gap-2 text-gray-800">
        {ingredientsShowing.map((ingredientShowing, index) => (
          <li
            key={index}
            className={`border border-black/[0.1] px-2 py-1 rounded-md cursor-pointer transition-colors duration-100 ${
              ingredients.some(
                (ingredient) => ingredient.Name === ingredientShowing
              )
                ? "bg-blue-300 sm:hover:bg-blue-400"
                : "sm:hover:bg-zinc-200 bg-white/5"
            }`}
            onClick={() => onIngredientClick(ingredientShowing)}
          >
            {ingredientShowing}
          </li>
        ))}
        <li
          className={`border text-sm sm:hover:bg-zinc-200 bg-slate-300 border-black/[0.1] px-2 py-1 rounded-md cursor-pointer transition-colors duration-100
          }`}
          onClick={onShowMoreClick}
        >
          visa fler
        </li>
        {ingredientsShowing.length > 4 ? (
          <li
            className={`border text-sm sm:hover:bg-zinc-200 bg-slate-300 border-black/[0.1] px-2 py-1 rounded-md cursor-pointer transition-colors duration-100 items-center justify-center flex
          }`}
            onClick={onShowLessClick}
          >
            <FaArrowUp />
          </li>
        ) : (
          ""
        )}
      </ul>
    </>
  );
}
