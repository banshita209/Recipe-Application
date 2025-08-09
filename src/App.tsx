import { Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import { Recipes } from "./component/Recipes";
import ViewRecipe from "./component/ViewRecipe";
import RecipeProvider from "./context/RecipeContext";
import AddRecipe from "./component/AddRecipe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route
          path="recipes"
          element={
            <RecipeProvider>
              <Recipes />
            </RecipeProvider>
          }
        />
        <Route
          path="recipes/:recipeId"
          element={
            <RecipeProvider>
              <ViewRecipe />
            </RecipeProvider>
          }
        />
        <Route path="addrecipe" element={<AddRecipe />} />
        <Route path="recipes/:recipeId/edit" element={<AddRecipe />} />
      </Route>
    </Routes>
  );
}

export default App;
