import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function AddRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    category: "",
    description: "",
    preparation: "",
    ingredients: "",
    imgUrl: "",
  });
  const navigate = useNavigate();
  const recipeId = useParams().recipeId;
  useEffect(() => {
    if (recipeId) {
      updateFrom();
    }
  }, []);

  const updateFrom = async () => {
    await axios
      .get("http://localhost:3000/recipes/" + recipeId)
      .then((res) => {
        setRecipe({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
        // setRecipe({});
      });
  };

  const submitForm = async () => {
    if (recipeId) {
      await axios
        .put("http://localhost:3000/recipes/" + recipeId, recipe)
        .then((res) => {
          if (res.status == 200) {
            alert("Recipe updated successfully");
            navigate("/recipes");
          } else {
            alert("Opps something went wrong try again");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Opps something went wrong try again");
        });
    } else {
      await axios
        .post("http://localhost:3000/recipes", recipe)
        .then((res) => {
          if (res.status == 200) {
            alert("Recipe added successfully");
          } else {
            alert("Opps something went wrong try again");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Opps something went wrong try again");
        });
    }
  };
  return (
    <div className="recipeBackground pt-16 flex justify-center items-center text-[#781200] h-full ">
      <div className="transcluentBackground w-1/2  rounded shadow py-8 px-8 my-12">
        <h1 className="text-2xl text-center font-bold py-2">
          {recipeId ? "Update Recipe" : "Add Recipe"}
        </h1>
        <div className="flex flex-row justify-between">
          <div className="my-2 flex flex-col w-full mx-1">
            <label className="mr-2">Title</label>
            <input
              type="text"
              className="border-2 rounded p-1 "
              value={recipe.name}
              onChange={(e) => {
                setRecipe((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>
          <div className="my-2 flex flex-col w-full mx-1">
            <label className="mr-2 ">Category</label>
            <input
              type="text"
              className="border-2 rounded p-1"
              value={recipe.category}
              onChange={(e) => {
                setRecipe((prev) => ({ ...prev, category: e.target.value }));
              }}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex  my-2   flex-col w-full mx-1">
            <label className="mr-2 ">Description</label>
            <textarea
              className="border-2 rounded  p-1"
              value={recipe.description}
              onChange={(e) => {
                setRecipe((prev) => ({ ...prev, description: e.target.value }));
              }}
            ></textarea>
          </div>
          <div className="flex my-2 flex-col w-full mx-1">
            <label className="mr-2 ">Preparation</label>
            <textarea
              className="border-2 rounded p-1"
              value={recipe.preparation}
              onChange={(e) => {
                setRecipe((prev) => ({ ...prev, preparation: e.target.value }));
              }}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="flex  my-2 flex-col w-full mx-1">
            <label className="mr-2 ">Ingredients</label>
            <textarea
              className="border-2 rounded p-1"
              value={recipe.ingredients}
              onChange={(e) => {
                setRecipe((prev) => ({ ...prev, ingredients: e.target.value }));
              }}
            ></textarea>
          </div>
          <div className="flex my-2 flex-col w-full mx-1">
            <label className="mr-2 ">Image Url</label>
            <input
              type="text"
              className="border-2 rounded  p-1"
              value={recipe.imgUrl}
              onChange={(e) => {
                setRecipe((prev) => ({ ...prev, imgUrl: e.target.value }));
              }}
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            className="bg-[#781200] px-2 py-1 text-white font-bold rounded"
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
