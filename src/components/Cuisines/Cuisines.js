import { GiAfrica, GiAmericanFootballHelmet, GiSeaDragon, GiEuropeanFlag, GiFrance, GiGreekTemple, GiIndianPalace, GiPizzaSlice, GiChopsticks, GiOlive, GiMexico, GiArabicDoor, GiNoodles, GiHandheldFan } from 'react-icons/gi';
import { TbJewishStar } from 'react-icons/tb';
import { FaSkiingNordic } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CuisinesResults from './CuisinesResults';
import './Cuisines.scss';

function Cuisines() {
   let cuisines = ['African', 'American', 'Chinese', 'European', 'French',  'Greek', 'Indian', 'Italian', 'Japanese', 'Jewish', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic',  'Spanish', 'Thai'];

  let icons = [<GiAfrica />, <GiAmericanFootballHelmet />,<GiSeaDragon />, <GiEuropeanFlag />, <GiFrance />, <GiGreekTemple />,  <GiIndianPalace />,<GiPizzaSlice />, <GiChopsticks />, <TbJewishStar />, <GiOlive />, <GiMexico />, <GiArabicDoor />, <FaSkiingNordic />, <GiHandheldFan />, <GiNoodles />];

  return (
    <div className='cuisines'>
      <div className='cuisines-container'>
        {cuisines.map((item, index) => (
          <NavLink className="cuisine-link" to={'/cuisines/' + item} key={item}>
            {icons[index]}
            <h4 className='cuisine-name'>{item}</h4>
          </NavLink>
        ))}
      </div>
      <CuisinesResults />
    </div>
  )
}

export default Cuisines