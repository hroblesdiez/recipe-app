import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './recipe.scss';

function Recipe() {
  let params = useParams();
  const[details, setDetails] = useState({});
  const[activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`);
    const details  = await data.json();
    console.log(details);
    setDetails(details);
  }

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, [params.name]);

  return (
    <div className='details-container'>
      <div className='details-img'>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <div className='details-info'>
        <div className='details-info__button-container'>
          <button className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab("instructions")}>Instructions</button>
          <button className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab("ingredients")}>Ingredients</button>
        </div>
        {activeTab === 'instructions' && (
        <div className='details-info__text'>
            <h4 dangerouslySetInnerHTML={{__html: details.summary}}></h4>
            <h4 dangerouslySetInnerHTML={{__html: details.instructions}}></h4>
        </div>
        )}

        {activeTab === 'ingredients' && (
          <ul>
          {details.extendedIngredients.map((ingredient) =>
            <li key={ingredient.id}>{ingredient.name}</li>
          )}
          </ul>
        )}

      </div>
    </div>
  )
}

export default Recipe