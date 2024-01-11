import { useSelectedIngredientsContext } from "@/context/selected-ingredients-context";

export default function SelectedIngredientsList() {
  const { ingredients } = useSelectedIngredientsContext();

  return (
    <ul>
      {ingredients.map((ingredient, key) => (
        <li key={key}>{ingredient.name}</li>
      ))}
    </ul>
  );
}
