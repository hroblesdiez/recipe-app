import './searchresults.scss';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';

function SearchResults() {
  const[searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearch =  async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=9`);

    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  }

  useEffect(() => {
    getSearch(params.search);
    console.log(params.search)
  }, [params.search]);

  return (
    <>
    {searchedRecipes.length !== 0 && (
      <div className='search-results'>
        <h2 className="search-results-title">Search <span>Results</span></h2>
        <div className='search-results-container'>
        {searchedRecipes.map((item) => {
          return (
            <Card key={item.id} item={item} />
          )
        })}
        </div>
      </div>
    ) }

    {(searchedRecipes.length === 0 && params.search !== undefined) && (
      <h4 className="search-results-none">No recipes matches your search. Please, try another one.</h4>
    )}
    </>
  )
}

export default SearchResults