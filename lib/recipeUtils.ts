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

export function allCategoryNames(): string[] {
  const categories = new Set<string>();
  for (const c of myRecipes) {
    for (const cat of c.Ingredients) {
      categories.add(cat.Category);
    }
  }
  return [...categories];
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

export function mostPopularIngredients(): string[] {
  const seenCountByIngredient: Record<string, number> = {};

  for (const r of myRecipes) {
    for (const ing of r.Ingredients) {
      seenCountByIngredient[ing.Name] ??= 0;
      seenCountByIngredient[ing.Name] += 1;
    }
  }

  return Object.keys(seenCountByIngredient)
    .sort((a, b) =>
      seenCountByIngredient[a] < seenCountByIngredient[b] ? -1 : 1
    )
    .reverse();
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
