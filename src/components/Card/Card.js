import './card.scss';
import { Link } from 'react-router-dom';

function Card({item}) {
  return (
    <div className='card'>
        <Link to={'/recipe/' + item.id}>
          <p>{item.title}</p>
          <img src={item.image} alt={item.title} />
        </Link>
    </div>
  )
}

export default Card