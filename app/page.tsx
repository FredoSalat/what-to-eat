import Recipes from "@/components/recipes";
import Searchbar from "@/components/searchbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1700px] mx-auto">
      <div className="sm:w-2/3 w-4/5 space-y-4">
        <Searchbar />
        <Recipes />
      </div>
    </div>
  );
}
