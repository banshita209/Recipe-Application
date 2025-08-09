import { NavLink } from "react-router";

export default function RecipeCard({ recipe }: any) {
  return (
    <div className="transcluentBackground m-4 p-2 rounded shadow w-72">
      <img src={recipe.imgUrl} className="mt-4 rounded w-52 h-48 mx-auto" />
      <div className="my-2 ">
        <p className="text-center text-lg font-bold capitalize">
          {recipe.name}
        </p>
        <p>
          <span className="font-bold">Category: </span> {recipe.category}
        </p>
        <p>
          <span className="font-bold">Description: </span>
          {recipe.description.slice(0, 50)}...&nbsp;
          <NavLink
            to={`/recipes/${recipe.id}`}
            className={"text-blue-950 underline"}
          >
            Know more
          </NavLink>
        </p>
        <p>
          <span className="font-bold">Ingredients:</span> {recipe.ingredients}
        </p>
      </div>
    </div>
  );
}
