import { useContext } from "react";
import { RecipesContext } from "../context/RecipeContext";
import RecipeCard from "./RecipeCard";

export function Recipes() {
  const { recipeList }: any = useContext(RecipesContext);

  return (
    <div className="pt-16 px-4 recipeBackground h-full">
      <h1 className="text-2xl text-center text-[#781200] font-bold py-2">
        Recipe List
      </h1>
      <div className="flex flex-row p-2">
        {recipeList.map((recipe: any, index: number) => {
          return <RecipeCard recipe={recipe} key={index} />;
        })}
      </div>
    </div>
  );
}
