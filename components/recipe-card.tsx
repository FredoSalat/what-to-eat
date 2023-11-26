import React from "react";

export default function RecipeCard({ ...recipe }) {
  return (
    <div className="w-full h-[200px] border">
      <h1>{recipe.Title}</h1>
    </div>
  );
}
