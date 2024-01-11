"use client";

import { Ingredient } from "@/lib/types";
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

  const addIngredient = async (selectedIngredient: string) => {
    try {
      const allIngredientsList = await allIngredients();
      const ingredientExist = ingredients.some(
        (ingredient) => ingredient.Name === selectedIngredient
      );

      if (ingredientExist) {
        setIngredients((prevIngredients) =>
          prevIngredients.filter(
            (ingredient) => ingredient.Name !== selectedIngredient
          )
        );
      } else {
        const ingredientToAdd = allIngredientsList.find(
          (ingredient) => ingredient.Name === selectedIngredient
        );

        if (ingredientToAdd) {
          setIngredients((prevIngredients) => [
            ...prevIngredients,
            ingredientToAdd,
          ]);
        } else {
          console.error(`Ingredient not found: ${selectedIngredient}`);
        }
      }
    } catch (error) {
      console.error("Error fetching all ingredients:");
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
      "useSelectedIngredientsContext must be used within a SelectedIngredientsContextProvider"
    );
  }
  return context;
}
