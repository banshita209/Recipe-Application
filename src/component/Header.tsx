import { NavLink, Outlet } from "react-router";

export function Header() {
  return (
    <div className="h-screen max-h-screen ">
      <div className="w-full h-fit bg-red-800 text-white p-4 flex justify-between fixed">
        <div className="text-xl">Recipe Book</div>
        <div className="">
          <NavLink to={"/"} className="p-2 hover:underline">
            Home
          </NavLink>
          <NavLink to={"/recipes"} className="p-2 hover:underline">
            Recipes
          </NavLink>
          <NavLink to={"/addrecipe"} className="p-2 hover:underline">
            Add Recipe
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
