import { allCategories, allIngredientsWCat } from "@/lib/recipeUtils";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

export default function PantryAccordion() {
  const categories = allCategories();

  const ingredientsWC = allIngredientsWCat();

  const getIngredientsByCategory = (category: string) =>
    ingredientsWC.filter((ingredient) => ingredient.Category === category);

  return (
    <>
      {categories.map((category, key) => (
        <Accordion key={key} defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {category}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {getIngredientsByCategory(category).map((ingredient, index) => (
                <div key={index}>{ingredient.Name}</div>
                // Adjust the rendering based on your ingredient structure
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
