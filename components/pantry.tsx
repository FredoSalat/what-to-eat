"use client";

import Heading from "./heading";
import PantryAccordion from "./pantry-accordion";

export default function SelectedIngredients() {
  return (
    <div className="mb-6">
      <Heading>Mitt Skafferi</Heading>
      <PantryAccordion />
    </div>
  );
}
