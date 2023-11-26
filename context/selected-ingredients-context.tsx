"use client";

import React, { createContext, useContext, useState } from "react";

import type { Ingredient, IngredientList } from "@/lib/types";

type SelectedIngredientsProviderProps = {
  children: React.ReactNode;
};

type SelectedIngredientsContextType = {
  ingredients: IngredientList;
  addIngredient: (selectedIngredient: Ingredient) => void;
};

export const SelectedIngredientsContext =
  createContext<SelectedIngredientsContextType | null>(null);

export default function SelectedIngredientsContextProvider({
  children,
}: SelectedIngredientsProviderProps) {
  const [ingredients, setIngredients] = useState<IngredientList>([]);

  const addIngredient = (selectedIngredient: Ingredient) => {
    const ingredientExist = ingredients.filter(
      (ingredient) => ingredient === selectedIngredient
    );
    if (ingredientExist.length > 0) {
      setIngredients((prevIngredients) =>
        prevIngredients.filter(
          (ingredient) => ingredient !== selectedIngredient
        )
      );
    } else {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        selectedIngredient,
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
