"use client";

import { useEffect, useState } from "react";

import Heading from "./heading";
import RecipeCard from "./recipe-card";
import { Recipe } from "@/lib/types";
import { useSelectedIngredientsContext } from "@/context/selected-ingredients-context";
import { getMatchingRecipes } from "@/lib/recipeUtils";

export default function Recipes() {
  const { ingredients } = useSelectedIngredientsContext();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const fetchedRecipes = await getMatchingRecipes(ingredients);
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [ingredients]);

  return (
    <>
      <Heading>Recipes</Heading>
      <div className="flex flex-col justify-center gap-5 max-w-[500px] m-auto">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </>
  );
}
