import Image from "next/image";
import { Card, CardBody, Stack } from "@chakra-ui/react";

export default function RecipeCard({ ...recipe }) {
  return (
    <Card className="flex sm:flex-row h-[200px] w-full" variant="outline">
      <Image
        className="object-cover sm:w-1/2 sm:h-auto w-full"
        src={`${recipe.imageURL}?fit=crop&crop=focalpoint&auto=format&fp-x=0.5&fp-y=0.5&fp-z=1.25&w=800&h=800`}
        alt={recipe.title}
        width={400}
        height={400}
      />

      <Stack>
        <CardBody>
          <h1 className="font-bold ">{recipe.title}</h1>
        </CardBody>
      </Stack>
    </Card>
  );
}
