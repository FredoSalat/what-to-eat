import axios from "axios";
import { Ingredient, Recipe } from "./types";

export async function allIngredients(): Promise<Ingredient[]> {
  try {
    const response = await axios.get(`/api/recipe`);

    console.log(response);

    const recipes = response.data;

    console.log(recipes);
    if (!recipes || !Array.isArray(recipes)) {
      throw new Error("Invalid response format from the server");
    }
    const ingredients = new Set<Ingredient>();
    for (const recipe of recipes) {
      for (const ingredient of recipe.ingredients) {
        ingredients.add(ingredient);
      }
    }

    return [...ingredients];
  } catch (error) {
    console.error("[allIngredients]", error);
    throw new Error("Error fetching or processing data");
  }
}

/* export function allIngredientNames(): string[] {
  const ingredients = new Set<string>();
  for (const r of myRecipes) {
    for (const ing of r.Ingredients) {
      ingredients.add(ing.Name);
    }
  }

  return [...ingredients];
} */

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

export async function findRecipe(
  pickedIngredients: string[]
): Promise<Recipe[]> {
  try {
    const response = await axios.get(`/api/recipe`);

    const recipes = response.data;

    return recipes.filter((recipe: Recipe) => {
      for (const ingredient of recipe.Ingredients) {
        if (!pickedIngredients.includes(ingredient.Name)) {
          return false;
        }
      }
      return true;
    });
  } catch (error) {
    console.error("[findRecipe]", error);
    throw new Error("Error fetching or processing data");
  }
}
