import './dietform.scss';
import { useState } from 'react';
import Card from '../Card/Card';

function DietForm() {

  const cuisines = ['African', 'American', 'Chinese', 'European', 'French',  'Greek', 'Indian', 'Italian', 'Japanese', 'Jewish', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic',  'Spanish', 'Thai'];

  const intolerances = ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat'];

  const diets =['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Low FODMAP', 'Whole30'];

  const calories = [100, 200, 300, 400, 500, 600, 700, 800];

  const[checkedCuisinesState, setCheckedCuisinesState] = useState(
    new Array(cuisines.length).fill(false)
  );
  const[checkedIntolerancesState, setCheckedIntolerancesState] = useState(
    new Array(intolerances.length).fill(false)
  );
  const[checkedDietsState, setCheckedDietsState] = useState(
    new Array(diets.length).fill(false)
  );

  const[values, setValues] = useState({
    cuisinesSelected: [],
    intolerancesSelected: [],
    dietsSelected: [],
    caloriesSelected: null
  });

  const[results, setResults] = useState([]);

  let cuisinesFiltered = [];
  let intolerancesFiltered = [];
  let dietsFiltered = [];

   const handleCuisinesOnChange = (position) => {
    const updatedCheckedCuisinesState = checkedCuisinesState.map((item, index) =>
      index === position ? !item : item );

    setCheckedCuisinesState(updatedCheckedCuisinesState);

    updatedCheckedCuisinesState.forEach((item, index) => {
      if(item === true) {
        cuisinesFiltered.push(cuisines[index]);
      }
    });

    setValues({
      ...values,
      cuisinesSelected: cuisinesFiltered,
    });
  }
  let cuisinesParam = values.cuisinesSelected.join().toLocaleLowerCase();

  const handleIntolerancesOnChange = (position) => {
    const updatedCheckedIntolerancesState = checkedIntolerancesState.map((item, index) =>
      index === position ? !item : item );

      setCheckedIntolerancesState(updatedCheckedIntolerancesState);

      updatedCheckedIntolerancesState.forEach((item, index) => {
      if(item === true) {
        intolerancesFiltered.push(intolerances[index]);
      }
    });

    setValues({
      ...values,
      intolerancesSelected: intolerancesFiltered,
    });
  }
  let intolerancesParam = values.intolerancesSelected.join().toLocaleLowerCase();


  const handleDietsOnChange = (position) => {
    const updatedCheckedDietsState = checkedDietsState.map((item, index) =>
      index === position ? !item : item );

      setCheckedDietsState(updatedCheckedDietsState);

      updatedCheckedDietsState.forEach((item, index) => {
      if(item === true) {
        dietsFiltered.push(diets[index]);
      }
    });

    setValues({
      ...values,
      dietsSelected: dietsFiltered,
    });
  }
  let dietsParam = values.dietsSelected.join().toLocaleLowerCase();


  const handleCaloriesOnChange = (e) => {
    setValues({
      ...values,
      caloriesSelected: Number(e.target.value),
    });

  }

  const getDietResults = async () => {

    if(values.cuisinesSelected.length !== 0 || values.intolerancesSelected.length !== 0 || values.dietsSelected.length !== 0 || values.caloriesSelected !== null) {
      const req = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisinesParam}&diet=${dietsParam}&intolerances=${intolerancesParam}&maxCalories=${values.caloriesSelected}&number=9`)

      const dietResults = await req.json();
      setResults(dietResults.results);
    }
  }
  let infoResults;

  const handleSubmit = (e) => {
    e.preventDefault();
    getDietResults();

  }

  if((results.length === 0 && (values.cuisinesSelected.length !== 0 || values.intolerancesSelected.length !== 0 || values.dietsSelected.length !== 0 || values.caloriesSelected !== null))) {
    infoResults = <p>No recipes matches your search criteria</p>;
  } else if(results.length !== 0) {
    infoResults = '';
  } else if(values.cuisinesSelected.length === 0 && values.intolerancesSelected.length === 0 && values.dietsSelected.length === 0 && values.caloriesSelected === null) {
    infoResults = <p>Please, introduce your diet needs</p>;
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="diet-form">
                <fieldset className='diet-form__fieldset'>
                  <legend className='diet-form__legend'>Cuisines</legend>
                  <label className='diet-form__label'>Select cuisines</label>
                  <div className='diet-form__container-inputs'>
                    {cuisines.map((item, index) => {
                      return (
                        <div className='diet-form__input' key={item}>
                          <label htmlFor="">{item}</label>
                          <input type="checkbox" id={item.toLocaleLowerCase()} name={item.toLocaleLowerCase()}  value={item.toLocaleLowerCase()} checked={checkedCuisinesState[index]} onChange={() => handleCuisinesOnChange(index)} ></input>
                        </div>
                      )
                    })}
                  </div>
                </fieldset>
                <fieldset className='diet-form__fieldset'>
                  <legend className='diet-form__legend'>Diets</legend>
                  <label className='diet-form__label'>Select diet(s)</label>
                  <div className='diet-form__container-inputs'>
                      {diets.map((item, index) => {
                        return (
                          <div className='diet-form__input' key={item}>
                            <label htmlFor="">{item}</label>
                            <input type="checkbox" id={item.toLocaleLowerCase()} name={item.toLocaleLowerCase()}  value={item.toLocaleLowerCase()} checked={checkedDietsState[index]} onChange={() => handleDietsOnChange(index)}></input>
                          </div>
                        )
                      })}
                  </div>
                </fieldset>
                <fieldset className='diet-form__fieldset'>
                  <legend className='diet-form__legend'>Intolerances</legend>
                  <label className='diet-form__label'>Select intolerance(s)</label>
                  <div className='diet-form__container-inputs'>
                      {intolerances.map((item, index) => {
                        return (
                          <div className='diet-form__input' key={item}>
                            <label htmlFor="">{item}</label>
                            <input type="checkbox" id={item.toLocaleLowerCase()} name={item.toLocaleLowerCase()}  value={item.toLocaleLowerCase()} checked={checkedIntolerancesState[index]} onChange={() => handleIntolerancesOnChange(index)}></input>
                          </div>
                        )
                      })}
                  </div>
                </fieldset>
                <fieldset className='diet-form__fieldset'>
                  <legend className='diet-form__legend'>Calories</legend>
                  <label className='diet-form__label' htmlFor="caloriesSelected">Select the maximum amount of calories</label>
                      <select id="caloriesSelected" name="caloriesSelected" className='calories_option' onChange={handleCaloriesOnChange}>
                        {calories.map((item) =>
                          <option value={item} key={item} >{item}</option>
                          )}
                      </select>
                </fieldset>
          </div>
          <input className='diet-form-submit' type="submit" value="Show recipes"></input>
      </form>
      {results.length > 0 && (
        <div className='results-container' id='results-container'>
        {results.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      )}

        <div className="no-results">
          {infoResults}
        </div>

    </>
  )
}

export default DietForm