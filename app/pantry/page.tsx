import IngredientSelector from "@/components/ingredient-selector";
import SearchBar from "@/components/search-bar";
import SelectedIngredients from "@/components/selected-ingredients";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center min-h-[600px] sm:min-h-[800px] max-w-[1700px] mx-auto mt-2">
      <div className="sm:w-4/5 w-[90%] space-y-2">
        <SearchBar />
        <IngredientSelector />
        <SelectedIngredients />
      </div>
    </div>
  );
}
