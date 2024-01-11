import IngredientSelector from "@/components/ingredient-selector";
import Searchbar from "@/components/searchbar";
import SelectedIngredients from "@/components/selected-ingredients";
import Recipes from "@/components/recipes";

export default function page() {
  return (
    <div className="flex flex-col items-center min-h-[600px] sm:min-h-[1000px] max-w-[1700px] mx-auto mt-2">
      <div className="sm:w-4/5 w-[90%] space-y-2">
        <Searchbar />
        <IngredientSelector />
        <SelectedIngredients />
        <Recipes />
      </div>
    </div>
  );
}
