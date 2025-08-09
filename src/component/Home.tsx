export function Home() {
  return (
    <div
      className={`max-h-full h-full recipeBackground  flex justify-center items-center`}
    >
      <div className="transcluentBackground rounded py-8 px-4 text-center text-[#781200]">
        <h1 className="text-xl font-bold">Welcome to the Recipe Book</h1>
        <p className="text-lg pt-1">
          Explore a varity of recipes, add your own, and share your culinary
          creations with the world!
        </p>
      </div>
    </div>
  );
}
