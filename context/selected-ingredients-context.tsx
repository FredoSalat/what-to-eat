"use client";

import { Ingredient } from "@/lib/data";
import { allIngredients } from "@/lib/recipeUtils";
import { createContext, useContext, useState } from "react";

type SelectedIngredientsProviderProps = {
  children: React.ReactNode;
};

type SelectedIngredientsContextType = {
  ingredients: Ingredient[];
  addIngredient: (selectedIngredient: string) => void;
};

export const SelectedIngredientsContext =
  createContext<SelectedIngredientsContextType | null>(null);

export default function SelectedIngredientsContextProvider({
  children,
}: SelectedIngredientsProviderProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const addIngredient = (selectedIngredient: string) => {
    const ingredientExist = ingredients.filter(
      (ingredient) => ingredient.Name === selectedIngredient
    );
    if (ingredientExist.length > 0) {
      setIngredients((prevIngredients) =>
        prevIngredients.filter(
          (ingredient) => ingredient.Name !== selectedIngredient
        )
      );
    } else {
      const allIngredientsList = allIngredients();

      const ingredientToAdd = allIngredientsList.filter(
        (ingredient) => ingredient.Name === selectedIngredient
      );
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        ingredientToAdd[0],
      ]);
    }
  };

  return (
    <SelectedIngredientsContext.Provider
      value={{
        ingredients,
        addIngredient,
      }}
    >
      {children}
    </SelectedIngredientsContext.Provider>
  );
}

export function useSelectedIngredientsContext() {
  const context = useContext(SelectedIngredientsContext);

  if (context === null) {
    throw new Error(
      "useSelectedIngredientsContext must be used within an SelectedIngredientsContextProvider"
    );
  }
  return context;
}
