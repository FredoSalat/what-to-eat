import conCarne from "@/public/images/concarne.png";
import potatisgratäng from "@/public/images/potatisgratäng.png";
import spagettiKöttfärs from "@/public/images/spagettiKöttfärsås.png";
import { StaticImageData } from "next/image";

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

interface Ingredient {
  Name: string;
  Preparation: string;
  Amount: number | null;
  Unit: string | null;
}

interface Recipe {
  Name: string;
  Image: StaticImageData;
  Ingredients: Ingredient[];
}

export const myRecipes: Recipe[] = [
  {
    Name: "Spaghetti och köttfärssås, Jenny Finns recept",
    Image: spagettiKöttfärs,
    Ingredients: [
      {
        Name: "nötfärs",
        Preparation: "800 g nötfärs",
        Amount: 800,
        Unit: "g",
      },
      {
        Name: "lök",
        Preparation: "1 lök (stor)",
        Amount: 1,
        Unit: "lök",
      },
      {
        Name: "vitlök",
        Preparation: "2 klyftor vitlök",
        Amount: 2,
        Unit: "klyftor",
      },
      {
        Name: "tomatpuré",
        Preparation: "3 msk tomatpuré",
        Amount: 3,
        Unit: "msk",
      },
      {
        Name: "soja",
        Preparation: "2 msk soja",
        Amount: 2,
        Unit: "msk",
      },
      {
        Name: "balsamvinäger",
        Preparation: "2 msk balsamvinäger",
        Amount: 2,
        Unit: "msk",
      },
      {
        Name: "kalvfond",
        Preparation: "2 msk kalvfond",
        Amount: 2,
        Unit: "msk",
      },
      {
        Name: "krossade tomater",
        Preparation: "1 burk krossade tomater",
        Amount: 1,
        Unit: "burk",
      },
      {
        Name: "körsbärstomater",
        Preparation: "1 burk körsbärstomater",
        Amount: 1,
        Unit: "burk",
      },
      {
        Name: "vatten",
        Preparation: "1 dl vatten",
        Amount: 1,
        Unit: "dl",
      },
      {
        Name: "salt",
        Preparation: "salt",
        Amount: null,
        Unit: null,
      },
      {
        Name: "svartpeppar",
        Preparation: "svartpeppar (från kvarn)",
        Amount: null,
        Unit: null,
      },
      {
        Name: "torkad timjan",
        Preparation: "ca 2 tsk torkad timjan",
        Amount: 2,
        Unit: "tsk",
      },
      {
        Name: "torkad basilika",
        Preparation: "ca 2 tsk torkad basilika",
        Amount: 2,
        Unit: "tsk",
      },
      {
        Name: "strösocker",
        Preparation: "strösocker (efter smak)",
        Amount: null,
        Unit: null,
      },
      {
        Name: "grädde",
        Preparation: "0,5 dl grädde (kan uteslutas)",
        Amount: 0.5,
        Unit: "dl",
      },
      {
        Name: "smör",
        Preparation: "smör (att steka i)",
        Amount: null,
        Unit: null,
      },
      {
        Name: "spaghetti",
        Preparation: "spaghetti (till servering)",
        Amount: null,
        Unit: null,
      },
    ],
  },
  {
    Name: "Potatisgratäng",
    Image: potatisgratäng,
    Ingredients: [
      {
        Name: "fast potatis",
        Preparation: "1 kg fast potatis, stor, skalad (800 g)",
        Amount: 800,
        Unit: "g",
      },
      {
        Name: "gul lök",
        Preparation: "2 gul lök",
        Amount: 2,
        Unit: null,
      },
      {
        Name: "vitlök",
        Preparation: "2 klyfta vitlök",
        Amount: 2,
        Unit: "klyftor",
      },
      {
        Name: "smör",
        Preparation: "50 g smör",
        Amount: 50,
        Unit: "g",
      },
      {
        Name: "vispgrädde",
        Preparation: "4 dl vispgrädde",
        Amount: 4,
        Unit: "dl",
      },
      {
        Name: "mjölk",
        Preparation: "2 dl mjölk",
        Amount: 2,
        Unit: "dl",
      },
      {
        Name: "lagrad prästost",
        Preparation: "100 g lagrad prästost",
        Amount: 100,
        Unit: "g",
      },
    ],
  },
  {
    Name: "Chili con carne",
    Image: conCarne,
    Ingredients: [
      {
        Name: "vita bönor (i tomatsås)",
        Preparation: "450 g vita bönor (i tomatsås)",
        Amount: 450,
        Unit: "g",
      },
      {
        Name: "kidneybönor",
        Preparation: "400 g kidneybönor",
        Amount: 400,
        Unit: "g",
      },
      {
        Name: "gul lök",
        Preparation: "2 gula lökar, hackade",
        Amount: 2,
        Unit: null,
      },
      {
        Name: "grön paprika",
        Preparation: "1 grön paprika, hackad",
        Amount: 1,
        Unit: null,
      },
      {
        Name: "köttfärs",
        Preparation: "500 g köttfärs",
        Amount: 500,
        Unit: "g",
      },
      {
        Name: "vitlök",
        Preparation: "2 klyftor vitlök, pressade",
        Amount: 2,
        Unit: "klyftor",
      },
      {
        Name: "chilipulver",
        Preparation: "1 tsk chilipulver",
        Amount: 1,
        Unit: "tsk",
      },
      {
        Name: "krossade tomater",
        Preparation: "800 g krossade tomater",
        Amount: 800,
        Unit: "g",
      },
      {
        Name: "salt",
        Preparation: "salt",
        Amount: null,
        Unit: null,
      },
      {
        Name: "peppar",
        Preparation: "peppar",
        Amount: null,
        Unit: null,
      },
      {
        Name: "olja",
        Preparation: "olja",
        Amount: null,
        Unit: null,
      },
      {
        Name: "chilipulver",
        Preparation: "chilipulver",
        Amount: null,
        Unit: null,
      },
      {
        Name: "paprikapulver",
        Preparation: "paprikapulver",
        Amount: null,
        Unit: null,
      },
    ],
  },
];
