import React from "react";
import Heading from "./heading";
import { recipes } from "@/lib/data";
import RecipeCard from "./recipe-card";

export default function Recipes() {
  return (
    <>
      <Heading>Recipes</Heading>
      <div className="flex flex-col justify-center gap-5 max-w-[500px] m-auto">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </>
  );
}
