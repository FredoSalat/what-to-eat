import React from "react";
import Heading from "./heading";
import { recipes } from "@/lib/data";
import RecipeCard from "./recipe-card";

export default function Recipes() {
  return (
    <>
      <Heading>Recipes</Heading>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </>
  );
}
