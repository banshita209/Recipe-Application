import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";

export default function ViewRecipe() {
  const recipeId = useParams().recipeId;

  const [recipe, setRecipe] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (recipeId) {
      fetchData();
    }
  }, [recipeId]);
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

  const deleteRecipe = async () => {
    axios
      .delete("http://localhost:3000/recipes/" + recipeId)
      .then((res) => {
        alert("record delete successfully ");
        navigate("/recipes");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="h-full pt-16 flex justify-center items-center recipeBackground ">
      <div className="transcluentBackground w-1/2  p-2 rounded shadow py-8 px-4">
        <img src={recipe.imgUrl} className="rounded w-48 h-48 mx-auto" />
        <div className="my-2 ">
          <p className="text-center text-lg font-bold capitalize">
            {recipe.name}
          </p>
          <p>
            <span className="font-bold capitalize">Category:</span>{" "}
            {recipe.category}
          </p>
          <p className="text-justify">
            <span className="font-bold">Description:</span> {recipe.description}
          </p>
          <p>
            <span className="font-bold">Ingredients:</span> {recipe.ingredients}
          </p>
          <p className="text-justify">
            <span className="font-bold">Preparations: </span>
            {recipe.preparation}
          </p>
        </div>
        <div className="flex flex-row justify-items-start my-2">
          <button
            className="py-1 px-2 mx-4 border-4 border-[#781200] text-[#781200] text-sm font-bold rounded-xl"
            onClick={() => {
              navigate(`/recipes/${recipeId}/edit`);
            }}
          >
            Edit
          </button>
          <button
            className="py-1 px-2 mx-4 border-4 border-[#781200] text-[#781200] text-sm font-bold rounded-xl"
            onClick={deleteRecipe}
          >
            Delete
          </button>
          <NavLink to={"/recipes"}>
            <button className="py-1 px-2 mx-4 border-4 border-[#781200] text-[#781200] text-sm font-bold rounded-xl">
              Back
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
