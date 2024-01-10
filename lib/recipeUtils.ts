import axios from "axios";
import { Ingredient, Recipe, TempIngredient, myRecipes } from "./data";

export async function allIngredients(): Promise<TempIngredient[]> {
  const response = await axios.get(`/api/recipe`);

  console.log(response);

  const recipes = response.data;

  console.log(recipes);
  if (!recipes || !Array.isArray(recipes)) {
    throw new Error("Invalid response format from the server");
  }
  const ingredients = new Set<TempIngredient>();
  for (const recipe of recipes) {
    for (const ingredient of recipe.ingredients) {
      ingredients.add(ingredient);
    }
  }

  return [...ingredients];
}

export function allIngredientNames(): string[] {
  const ingredients = new Set<string>();
  for (const r of myRecipes) {
    for (const ing of r.Ingredients) {
      ingredients.add(ing.Name);
    }
  }

  return [...ingredients];
}

export async function mostPopularIngredients(): Promise<string[]> {
  try {
    const response = await axios.get(`/api/recipe`);

    console.log(response);

    const recipes = response.data;

    console.log(recipes);
    if (!recipes || !Array.isArray(recipes)) {
      throw new Error("Invalid response format from the server");
    }

    const seenCountByIngredient: Record<string, number> = {};

    for (const recipe of recipes) {
      if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
        for (const ingredient of recipe.ingredients) {
          seenCountByIngredient[ingredient.name] ??= 0;
          seenCountByIngredient[ingredient.name] += 1;
        }
      }
    }

    const sortedIngredients = Object.keys(seenCountByIngredient)
      .sort((a, b) => seenCountByIngredient[a] - seenCountByIngredient[b])
      .reverse();

    return sortedIngredients;
  } catch (error) {
    console.error("[mostPopularIngredients]", error);
    throw new Error("Error fetching or processing data");
  }
}

export function findRecipe(pickedIngredients: string[]): Recipe[] {
  return myRecipes.filter((r) => {
    for (const ing of r.Ingredients) {
      if (!pickedIngredients.includes(ing.Name)) {
        return false;
      }
    }
    return true;
  });
}
