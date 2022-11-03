import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.scss';
import { MdOutlineMenu, MdClose } from 'react-icons/md';

function NavBar() {

  const links = ['home', 'cuisines', 'on-diet'];
  const location = useLocation();

  //Resposive menu
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //when is true changes to false and otherwise
    setClicked(!clicked);
  }

  //change the background color when scrolling
  const[color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 48) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  document.addEventListener('scroll', changeColor);

  return (
    <div className={(location.pathname === '/' || location.pathname === '/on-diet') && !color ? 'navbar' : 'navbar bg-dark'}>
        <div className="navbar-logo-container">
          <NavLink className="logo" to={'/'}>Recipes<span className='logo-span'>App</span></NavLink>
        </div>
        <div className="navbar-btn" onClick={handleClick}>
            {clicked ?  <MdClose /> : <MdOutlineMenu  /> }
        </div>
        <ul className= {`navbar-links ${clicked ? 'active' : ''}`}>
            {links.map((item) => (
              <li className="navbar-links__link" key={`link${item}`} onClick={() => setClicked(false)}><NavLink  className={({isActive}) => isActive === true && item !== 'home' ? 'current' : ''} to= {item === 'home' ? '/' : `${item}`}>{item}</NavLink></li>
            ))}
        </ul>
    </div>
  )
}

export default NavBar