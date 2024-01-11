"use client";

import Heading from "./heading";
/* import PantryAccordion from "./pantry-accordion";
 */

import SelectedIngredientsList from "./selected-ingredient-list";
export default function SelectedIngredients() {
  return (
    <div className="mb-6">
      <Heading>Mitt Skafferi</Heading>
      {/* <PantryAccordion /> */}
      <SelectedIngredientsList />
    </div>
  );
}
