import { myRecipes } from "./data";

export function allIngredients(): string[] {
  const ingredients = new Set<string>();
  for (const r of myRecipes) {
    for (const ing of r.Ingredients) {
      ingredients.add(ing.Name);
    }
  }

  return [...ingredients];
}

/*   export function mostPopularIngredients(): string[] {
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
  
  export function findRecipe(pickedIngredients: Ingredients): Recipes {
    return myRecipes.filter((r) => {
      for (const ing of r.Ingredients) {
        if (!pickedIngredients.includes(ing.Name)) {
          return false;
        }
      }
      return true;
    });
  }
  
  export function findRecipe(pickedIngredients: string[]): Recipes {
    return myRecipes.filter((r) =>
      r.Ingredients.every((ing) => pickedIngredients.includes(ing.Name))
    );
  
 */
