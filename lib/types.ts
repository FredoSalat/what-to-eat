import { popularIngredients } from "./data";

export type Ingredient = (typeof popularIngredients)[number];

export type IngredientList = Ingredient[];
