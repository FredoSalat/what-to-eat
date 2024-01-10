import conCarne from "@/public/images/conCarne.png";
import potatisgratäng from "@/public/images/potatisgratäng.png";
import spagettiKöttfärs from "@/public/images/spagettiKöttfärsås.png";
import { StaticImageData } from "next/image";

export interface TempIngredient {
  name: string;
  preparation: string;
}

export interface TempRecipe {
  title: string;
  ingredients: TempIngredient[];
}

export interface Ingredient {
  Name: string;
  Preparation: string;
  Amount: number | null;
  Unit: string | null;
  Category: string;
}

export interface Recipe {
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
        Category: "kött",
      },
      {
        Name: "lök",
        Preparation: "1 lök (stor)",
        Amount: 1,
        Unit: "lök",
        Category: "grönsaker",
      },
      {
        Name: "vitlök",
        Preparation: "2 klyftor vitlök",
        Amount: 2,
        Unit: "klyftor",
        Category: "kryddor",
      },
      {
        Name: "tomatpuré",
        Preparation: "3 msk tomatpuré",
        Amount: 3,
        Unit: "msk",
        Category: "kryddor",
      },
      {
        Name: "soja",
        Preparation: "2 msk soja",
        Amount: 2,
        Unit: "msk",
        Category: "kryddor",
      },
      {
        Name: "balsamvinäger",
        Preparation: "2 msk balsamvinäger",
        Amount: 2,
        Unit: "msk",
        Category: "kryddor",
      },
      {
        Name: "kalvfond",
        Preparation: "2 msk kalvfond",
        Amount: 2,
        Unit: "msk",
        Category: "buljong",
      },
      {
        Name: "krossade tomater",
        Preparation: "1 burk krossade tomater",
        Amount: 1,
        Unit: "burk",
        Category: "konserv",
      },
      {
        Name: "körsbärstomater",
        Preparation: "1 burk körsbärstomater",
        Amount: 1,
        Unit: "burk",
        Category: "konserv",
      },
      {
        Name: "vatten",
        Preparation: "1 dl vatten",
        Amount: 1,
        Unit: "dl",
        Category: "vätskor",
      },
      {
        Name: "salt",
        Preparation: "salt",
        Amount: null,
        Unit: null,
        Category: "kryddor",
      },
      {
        Name: "svartpeppar",
        Preparation: "svartpeppar (från kvarn)",
        Amount: null,
        Unit: null,
        Category: "kryddor",
      },
      {
        Name: "torkad timjan",
        Preparation: "ca 2 tsk torkad timjan",
        Amount: 2,
        Unit: "tsk",
        Category: "kryddor",
      },
      {
        Name: "torkad basilika",
        Preparation: "ca 2 tsk torkad basilika",
        Amount: 2,
        Unit: "tsk",
        Category: "kryddor",
      },
      {
        Name: "grädde",
        Preparation: "0,5 dl grädde (kan uteslutas)",
        Amount: 0.5,
        Unit: "dl",
        Category: "mejeriprodukter",
      },
      {
        Name: "spaghetti",
        Preparation: "spaghetti (till servering)",
        Amount: null,
        Unit: null,
        Category: "pasta",
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
        Category: "grönsaker",
      },
      {
        Name: "gul lök",
        Preparation: "2 gul lök",
        Amount: 2,
        Unit: null,
        Category: "grönsaker",
      },
      {
        Name: "vitlök",
        Preparation: "2 klyfta vitlök",
        Amount: 2,
        Unit: "klyftor",
        Category: "kryddor",
      },
      {
        Name: "smör",
        Preparation: "50 g smör",
        Amount: 50,
        Unit: "g",
        Category: "mejeriprodukter",
      },
      {
        Name: "vispgrädde",
        Preparation: "4 dl vispgrädde",
        Amount: 4,
        Unit: "dl",
        Category: "mejeriprodukter",
      },
      {
        Name: "mjölk",
        Preparation: "2 dl mjölk",
        Amount: 2,
        Unit: "dl",
        Category: "mejeriprodukter",
      },
      {
        Name: "lagrad prästost",
        Preparation: "100 g lagrad prästost",
        Amount: 100,
        Unit: "g",
        Category: "ost",
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
        Category: "baljväxter",
      },
      {
        Name: "kidneybönor",
        Preparation: "400 g kidneybönor",
        Amount: 400,
        Unit: "g",
        Category: "baljväxter",
      },
      {
        Name: "gul lök",
        Preparation: "2 gula lökar, hackade",
        Amount: 2,
        Unit: null,
        Category: "grönsaker",
      },
      {
        Name: "grön paprika",
        Preparation: "1 grön paprika, hackad",
        Amount: 1,
        Unit: null,
        Category: "grönsaker",
      },
      {
        Name: "köttfärs",
        Preparation: "500 g köttfärs",
        Amount: 500,
        Unit: "g",
        Category: "kött",
      },
      {
        Name: "vitlök",
        Preparation: "2 klyftor vitlök, pressade",
        Amount: 2,
        Unit: "klyftor",
        Category: "kryddor",
      },
      {
        Name: "chilipulver",
        Preparation: "1 tsk chilipulver",
        Amount: 1,
        Unit: "tsk",
        Category: "kryddor",
      },
      {
        Name: "krossade tomater",
        Preparation: "800 g krossade tomater",
        Amount: 800,
        Unit: "g",
        Category: "konserv",
      },
      {
        Name: "salt",
        Preparation: "salt",
        Amount: null,
        Unit: null,
        Category: "kryddor",
      },
      {
        Name: "peppar",
        Preparation: "peppar",
        Amount: null,
        Unit: null,
        Category: "kryddor",
      },
      {
        Name: "olja",
        Preparation: "olja",
        Amount: null,
        Unit: null,
        Category: "mejeriprodukter",
      },
      {
        Name: "chilipulver",
        Preparation: "chilipulver",
        Amount: null,
        Unit: null,
        Category: "kryddor",
      },
      {
        Name: "paprikapulver",
        Preparation: "paprikapulver",
        Amount: null,
        Unit: null,
        Category: "kryddor",
      },
    ],
  },
];
