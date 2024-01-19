"use client";

import { useEffect, useState } from "react";

import Heading from "./heading";
import RecipeCard from "./recipe-card";
import { Recipe } from "@/lib/types";
import { tempGetTenRecipes } from "@/lib/recipeUtils";

export default function Recipes() {
  /* const { ingredients } = useSelectedIngredientsContext(); */
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(
    () => {
      const fetchRecipes = async () => {
        try {
          const fetchedRecipes = await tempGetTenRecipes();
          setRecipes(fetchedRecipes);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      };

      fetchRecipes();
    },
    [
      /* ingredients */
    ]
  );

  return (
    <>
      <h2 className="text-md font-bold text-center">
        Du kan laga {recipes.length} recept
      </h2>
      <div className="flex flex-col justify-center gap-5 max-w-[800px] m-auto">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </>
  );
}
