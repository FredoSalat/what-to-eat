import Image from "next/image";
import { Card, CardBody } from "@chakra-ui/react";

export default function RecipeCard({ ...recipe }) {
  console.log(recipe);
  return (
    <Card maxH="sm">
      <CardBody>
        <Image
          src={recipe.imageURL}
          alt={recipe.title}
          className="w-full h-[300px] rounded-lg object-cover"
          width="500"
          height="500"
        />
        <h1 className="text-lg font-bold text-gray-800 p-2">{recipe.title}</h1>
      </CardBody>
    </Card>
  );
}
