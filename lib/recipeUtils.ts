import axios from "axios";
import { Recipe } from "./types";

export async function getAllIngredientNames(): Promise<string[]> {
  try {
    const response = await axios.get(`/api/recipe`);

    const recipes = response.data;

    if (!recipes || !Array.isArray(recipes)) {
      throw new Error("Invalid response format from the server");
    }
    const ingredients = new Set<string>();
    for (const recipe of recipes) {
      for (const ingredient of recipe.ingredients) {
        ingredients.add(ingredient.ingredient);
      }
    }

    return [...ingredients];
  } catch (error) {
    console.error("[allIngredients]", error);
    throw new Error("Error fetching or processing data");
  }
}

export async function getMostPopularIngredients(): Promise<string[]> {
  try {
    const response = await axios.get(`/api/recipe`);

    const recipes = response.data;

    if (!recipes || !Array.isArray(recipes)) {
      throw new Error("Invalid response format from the server");
    }

    const seenCountByIngredient: Record<string, number> = {};

    for (const recipe of recipes) {
      if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
        for (const ingredient of recipe.ingredients) {
          seenCountByIngredient[ingredient.ingredient] ??= 0;
          seenCountByIngredient[ingredient.ingredient] += 1;
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

export async function getMatchingRecipes(
  pickedIngredients: string[]
): Promise<Recipe[]> {
  try {
    const response = await axios.get(`/api/recipe`);

    const recipes = response.data;

    console.log(recipes);

    return recipes.filter((recipe: Recipe) => {
      for (const ingredient of recipe.ingredients) {
        if (!pickedIngredients.includes(ingredient.ingredient)) {
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

export async function tempGetTenRecipes(): Promise<Recipe[]> {
  try {
    const response = await axios.get(`/api/recipe`);

    const recipes = response.data;

    return recipes.slice(100, 110);
  } catch (error) {
    console.error("[findRecipe]", error);
    throw new Error("Error fetching or processing data");
  }
}
