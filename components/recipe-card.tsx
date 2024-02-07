import Image from "next/image";
import { Card, CardBody, Stack } from "@chakra-ui/react";
import Link from "next/link";

export default function RecipeCard({ ...recipe }) {
  return (
    <Link href="recipe">
      <Card className="sm:flex-row sm:h-[200px] h-[250px]" variant="elevated">
        <Image
          className="object-cover sm:w-1/2 sm:h-auto h-2/3 w-full"
          src={`${recipe.imageURL}?fit=crop&crop=focalpoint&auto=format&fp-x=0.5&fp-y=0.5&fp-z=1.25&w=800&h=800`}
          alt={recipe.title}
          width={600}
          height={600}
        />

        <Stack>
          <CardBody>
            <h1 className="font-bold ">{recipe.title}</h1>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
}
