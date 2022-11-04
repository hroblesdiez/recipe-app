import { useState, useEffect } from "react";
import Card from "../Card/Card";
import './popular.scss';

function Popular() {
  const[popular, setPopular] = useState([]);

  const getPopularRecipes = async () => {

      const req = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);

      const popularRecipes = await req.json();
      setPopular(popularRecipes.recipes);
  }

  useEffect(() => {
    getPopularRecipes();
  }, []);

  return (
    <div className="popular">
      <h2 className="popular-title">Our Popular <span>Recipes</span></h2>
      <div className="popular-container">
        {popular.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

    </div>
  )
}

export default Popular