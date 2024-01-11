export interface Recipe {
  title: string;
  imageUrl: string;
  ingredients: { name: string; preparation: string }[];
}
