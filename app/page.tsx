import IngredientSelector from "@/components/ingredient-selector";
import SearchBar from "@/components/search-bar";
import SelectedIngredients from "@/components/selected-ingredients";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] sm:min-h-[800px] max-w-[1700px] mx-auto">
      <div className="sm:w-2/3 w-4/5">
        <SelectedIngredients />
        <SearchBar />
        <IngredientSelector />
      </div>
    </div>
  );
}
