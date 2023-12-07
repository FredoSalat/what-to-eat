"use client";

import { Recipe, findRecipe } from "@/lib/data";
import Heading from "./heading";
import RecipeCard from "./recipe-card";
import { useSelectedIngredientsContext } from "@/context/selected-ingredients-context";
import { useEffect, useState } from "react";

export default function Recipes() {
  const { ingredients } = useSelectedIngredientsContext();
  const [myRecipes, setMyRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const recipes = findRecipe(ingredients);
    setMyRecipes(recipes);
  }, [ingredients]);

  return (
    <>
      <Heading>Recipes</Heading>
      <div className="flex flex-col justify-center gap-5 max-w-[500px] m-auto">
        {myRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </>
  );
}
