export interface Interfaces {
}

//Chiamata complex generale
export interface RecipeSearchResponse {
  results: RecipePreview[];
  offset: number;
  number: number;
  totalResults: number;
}

//Singola ricetta in complex
export interface RecipePreview {
  id: number;
  title: string;
  image: string;
  imageType: string;
  vegetarian: boolean,
  glutenFree: boolean,
  vegan: boolean,
  dairyFree: boolean,
  veryHealthy: boolean,
  cheap: boolean,
  veryPopular: boolean,
}

//Singolo pietanza
export interface Recipe {
  id: number;
  title: string;
  image: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  cheap: boolean;
  veryPopular: boolean;
  veryHealthy: boolean;
  extendedIngredients: SimpleIngredient[];
  analyzedInstructions: Instruction[];
}

export interface Instruction {
  name: string;
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
  ingredients: { name: string }[];
  equipment: { name: string }[];
}

//Per singolo ingrediente
export interface SimpleIngredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}
