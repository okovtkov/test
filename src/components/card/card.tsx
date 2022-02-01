import { Link } from 'react-router-dom';
import { User } from '../../types';
import './card.scss';

interface Props {
  data: User;
}

export default function Card(props: Props) {
  return (
    <div className="card">
      <div className="card__item">
        <span className="card__key">ФИО: </span>
        <span className="card__value">{props.data.name}</span>
      </div>
      <div className="card__item">
        <span className="card__key">город: </span>
        <span className="card__value">{props.data.address.city}</span>
      </div>
      <div className="card__item">
        <span className="card__key">компания: </span>
        <span className="card__value">{props.data.company.name}</span>
      </div>
      <Link className="card__more" to={`/profile/${props.data.id}`}>Подробнее</Link>
    </div>
  )
}