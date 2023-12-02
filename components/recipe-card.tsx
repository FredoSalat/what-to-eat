import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Image from "next/image";

export default function RecipeCard({ ...recipe }) {
  return (
    <Card>
      <CardBody>
        <Image
          src={recipe.Image_Name}
          alt={recipe.Title}
          className="w-full h-full rounded-lg object-cover"
        />
        <h1 className="text-lg font-bold text-gray-800 p-2">{recipe.Title}</h1>
      </CardBody>
    </Card>
  );
}
