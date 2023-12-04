import flankSteak from "@/public/images/flankSteak.png";
import onionChicken from "@/public/images/chickenOnion.png";
import macAndCheese from "@/public/images/macAndCheese.png";
import shrimpAlfredo from "@/public/images/shrimpAlfredo.png";
import chickenRosemary from "@/public/images/chickenRosemary.png";

export const allIngredients = [
  "Butter",
  "Worcestershire sauce",
  "Ground mustard",
  "Fried onions",
  "Chicken",
  "Milk",
  "Water",
  "Macaroni",
  "Velveeta",
  "Cheddar cheese",
  "Pasta",
  "Peas",
  "Shrimp",
  "Alfredo Sauce",
  "Parmesan cheese",
  "Barbecue sauce",
  "Beef broth",
  "Lemon juice",
  "Flank steak",
  "Chicken broth",
  "Whipped cream",
  "Rosemary",
] as const;

export const popularIngredients = [
  "Butter",
  "Onions",
  "Chicken",
  "Milk",
  "Macaroni",
  "Cheddar cheese",
  "Pasta",
  "Peas",
  "Lemon juice",
  "Whipped cream",
] as const;

export const recipes = [
  {
    Name: "Tasty Onion Chicken",
    Raw_Ingredients:
      "1/2 cup butter, melted, 1 tablespoon Worcestershire sauce, 1 teaspoon ground mustard, 1 can (2.8 ounces) French-fried onions, crushed 4 boneless skinless chicken breast halves (4 ounces each)",
    Cleaned_Ingredients: [
      "Butter",
      "Worcestershire sauce",
      "Ground mustard",
      "Onions",
      "Chicken breast",
    ],
    Image_Name: onionChicken,
  },
  {
    Name: "One-Pot Mac and Cheese",
    Raw_Ingredients:
      "3-1/2 cups whole milk, 3 cups water, 1 package (16 ounces) elbow macaroni, 4 ounces Velveeta, cubed, 2 cups shredded sharp cheddar cheese, 1/2 teaspoon salt, 1/2 teaspoon coarsely ground pepper",
    Cleaned_Ingredients: ["Milk", "Macaroni", "Velveeta", "Cheddar cheese"],
    Image_Name: macAndCheese,
  },
  {
    Name: "Shrimp Pasta Alfredo",
    Raw_Ingredients:
      "3 cups uncooked bow tie pasta, 2 cups frozen peas, 1 pound peeled and deveined cooked medium shrimp tails removed, 1 jar (15 ounces) Alfredo sauce, 1/4 cup shredded Parmesan cheese",
    Cleaned_Ingredients: [
      "Pasta",
      "Peas",
      "Shrimp",
      "Alfredo Sauce",
      "Parmesan cheese",
    ],
    Image_Name: shrimpAlfredo,
  },
  {
    Name: "Easy Marinated Grilled Flank Steak",
    Raw_Ingredients:
      "1 cup barbecue sauce, 1/2 cup burgundy wine or beef broth, 1/4 cup lemon juice, 1 beef flank steak (2 pounds)",
    Cleaned_Ingredients: [
      "Barbecue sauce",
      "Beef broth",
      "Lemon juice",
      "Flank steak",
    ],
    Image_Name: flankSteak,
  },
  {
    Name: "Chicken with Rosemary Butter Sauce",
    Raw_Ingredients:
      "4 boneless skinless chicken breast halves (6 ounces each), 4 tablespoons butter, divided, 1/2 cup white wine or chicken broth, 1/2 cup heavy whipping cream, 1 tablespoon minced fresh rosemary",
    Cleaned_Ingredients: [
      "Chicken",
      "Butter",
      "Chicken broth",
      "Whipped cream",
      "Rosemary",
    ],
    Image_Name: chickenRosemary,
  },
] as const;
