import axios from "axios";
import { useEffect, useState } from "react";

export function useRecipe() {
  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("http://localhost:3000/recipes")
      .then((res) => {
        setRecipeList(res.data);
      })
      .catch((err) => {
        console.log(err);
        setRecipeList([]);
      });
  };
  return [recipeList, setRecipeList];
}

export function useGetRecipe(recipeId: any) {
  const [recipe, setRecipe] = useState<any>({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("http://localhost:3000/recipes/" + recipeId)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
        setRecipe({});
      });
  };
  return [recipe];
}
