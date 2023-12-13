import { useSelectedIngredientsContext } from "@/context/selected-ingredients-context";
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
  const { ingredients } = useSelectedIngredientsContext();

  const ingredientsByCategory = (category: string) =>
    ingredients.filter((ingredient) => ingredient.Category === category);

  const uniqueCategories = (): string[] => {
    const uniqueCategorySet = new Set<string>();

    ingredients.forEach((ingredient) => {
      uniqueCategorySet.add(ingredient.Category);
    });
    const uniqueCategoriesArray = Array.from(uniqueCategorySet);

    return uniqueCategoriesArray;
  };

  return (
    <>
      {uniqueCategories().map((category, key) => (
        <Accordion key={key} allowToggle allowMultiple>
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
              <ul>
                {ingredientsByCategory(category).map((ingredient, index) => (
                  <li key={index}>{ingredient.Name}</li>
                ))}
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
