import { popularIngredients, allIngredients } from "./data";

export type PopularIngredient = (typeof popularIngredients)[number];

export type Ingredient = (typeof allIngredients)[number];

export type PopularIngredientList = PopularIngredient[];

export type IngredientList = Ingredient[];
