import Heading from "./heading";
import RecipeCard from "./recipe-card";
import { myRecipes } from "@/lib/data";

export default function Recipes() {
  return (
    <>
      <Heading>Recipes</Heading>
      <div className="flex flex-col justify-center gap-5 max-w-[500px] m-auto">
        {myRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </>
  );
}
