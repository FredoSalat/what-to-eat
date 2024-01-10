import axios from "axios";
import { Ingredient, Recipe, myRecipes } from "./data";

export function allIngredients(): Ingredient[] {
  const ingredients = new Set<Ingredient>();
  for (const r of myRecipes) {
    for (const ing of r.Ingredients) {
      ingredients.add(ing);
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

    for (const r of recipes) {
      if (r.Ingredients && Array.isArray(r.Ingredients)) {
        for (const ing of r.Ingredients) {
          seenCountByIngredient[ing.Name] ??= 0;
          seenCountByIngredient[ing.Name] += 1;
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
