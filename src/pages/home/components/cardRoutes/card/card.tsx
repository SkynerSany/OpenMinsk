import { Link } from 'react-router-dom';
import './card.scss';
import {ICard} from './card.types';

export default function RoutesCard({title, desc, iconName}: ICard) {
  return (
    <Link to={`/${ iconName }`} className="routes-card">
      <div className='routes-card__container'>
        <img className='routes-card__icon' src={`/assets/icons/${ iconName }.png`} alt={`icon ${ title }`} />
        <p className="routes-card__title">{ title }</p>
      </div>
      <p className="routes-card__desc">{ desc }</p>
    </Link>
  )
}
