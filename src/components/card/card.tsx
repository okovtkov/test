import { Link } from 'react-router-dom';
import './card.scss';

export default function Card() {
  return (
    <div className="card">
      <div className="card__item">
        <span className='card__key'>ФИО: </span>
        <span className='card__value'>Иван Иванов</span>
      </div>
      <div className="card__item">
        <span className='card__key'>город: </span>
        <span className='card__value'>Москва</span>
      </div>
      <div className="card__item">
        <span className='card__key'>компания: </span>
        <span className='card__value'>ООО "Пример"</span>
      </div>
      <Link className="card__more" to='/profile'>Подробнее</Link>
    </div>
  )
}