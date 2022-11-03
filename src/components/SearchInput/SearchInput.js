import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './searchinput.scss';


function SearchInput() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
    setInput('');
    window.scrollTo({
      top: 700,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <form className='search-form' onSubmit={submitHandler}>
      <input className='search-form__input' type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search a recipe" />
      <button type='submit' className='search-form__svg-container' id='searchBtn' >
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchInput