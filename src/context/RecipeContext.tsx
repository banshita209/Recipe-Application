import { createContext, useEffect } from "react";
import { useRecipe } from "./useRecipesApi";

export const RecipesContext = createContext({});

export default function RecipeProvider({ children }: any) {
  const [recipeList, setRecipeList] = useRecipe();
  useEffect(() => {
    console.log(recipeList);
  }, [recipeList]);

  return (
    <RecipesContext.Provider
      value={{ recipeList: recipeList, setRecipeList: setRecipeList }}
    >
      {children}
    </RecipesContext.Provider>
  );
}
