export interface Recipe {
  title: string;
  imageURL: string;
  ingredients: { ingredient: string; preparation: string }[];
}
