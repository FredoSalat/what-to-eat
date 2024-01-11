export interface Recipe {
  title: string;
  imageURL: string;
  ingredients: { name: string; preparation: string }[];
}
