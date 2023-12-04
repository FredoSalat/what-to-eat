import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Image from "next/image";

export default function RecipeCard({ ...recipe }) {
  return (
    <Card maxH="sm">
      <CardBody>
        <Image
          src={recipe.Image_Name}
          alt={recipe.Name}
          className="w-full h-[300px] rounded-lg object-cover"
        />
        <h1 className="text-lg font-bold text-gray-800 p-2">{recipe.Name}</h1>
      </CardBody>
    </Card>
  );
}
