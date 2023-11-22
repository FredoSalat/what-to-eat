"use client";

import React, { createContext, useContext, useState } from "react";

import type { IngredientList } from "@/lib/types";

type SelectedIngredientsProviderProps = {
  children: React.ReactNode;
};

type SelectedIngredientsContextType = {
  ingredients: IngredientList;
  setIngredients: React.Dispatch<React.SetStateAction<IngredientList>>;
};

export const SelectedIngredientsContext =
  createContext<SelectedIngredientsContextType | null>(null);

export default function SelectedIngredientsContextProvider({
  children,
}: SelectedIngredientsProviderProps) {
  const [ingredients, setIngredients] = useState<IngredientList>([]);

  return (
    <SelectedIngredientsContext.Provider
      value={{
        ingredients,
        setIngredients,
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
