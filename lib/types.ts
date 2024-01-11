export interface Ingredient {
  Name: string;
  Preparation: string;
}

export interface Recipe {
  Title: string;
  Ingredients: Ingredient[];
}
