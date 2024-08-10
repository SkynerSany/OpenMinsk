import { Link } from 'react-router-dom';
import { IButton } from './button.types';
import './button.scss';

export default function Button({ text, type, color, callback, link = '', newClass = '' }: IButton) {
  return (
    type === 'button' ? 
      <button className={`button button-${color} ${ newClass }`} onClick={() => callback}>{ text }</button>
      :
      <Link to={ link } className={`button button-${color} ${ newClass }`}>{ text }</Link>
  )
}
