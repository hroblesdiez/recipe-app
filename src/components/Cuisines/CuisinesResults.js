import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Card from '../Card/Card';

function CuisinesResults() {

  const[cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisineResults = async (name) => {
    const req = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`);

    const data = await req.json();
    console.log(data.results)
    setCuisine(data.results);
  }

  useEffect(() => {
    getCuisineResults(params.cuisine);
  }, [params.cuisine])

  return (
    <div className='cuisines-results-container'>
      {cuisine.map((item) => {
        return (
          <Card className="card-cuisine" item={item} key={item.id} />
        )
      })}
    </div>
  )
}

export default CuisinesResults