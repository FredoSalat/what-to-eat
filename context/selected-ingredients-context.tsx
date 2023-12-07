"use client";

import { createContext, useContext, useState } from "react";

type SelectedIngredientsProviderProps = {
  children: React.ReactNode;
};

type SelectedIngredientsContextType = {
  ingredients: string[];
  addIngredient: (selectedIngredient: string) => void;
};

export const SelectedIngredientsContext =
  createContext<SelectedIngredientsContextType | null>(null);

export default function SelectedIngredientsContextProvider({
  children,
}: SelectedIngredientsProviderProps) {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const addIngredient = (selectedIngredient: string) => {
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
