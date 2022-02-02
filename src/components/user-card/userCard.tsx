import { Link } from 'react-router-dom';
import { UserData } from '../../types';
import './userCard.scss';

interface Props {
  userData: UserData;
}

export default function UserCard(props: Props) {
  return (
    <div className="user-card">
      <div className="user-card__item">
        <dt className="user-card__key">ФИО: </dt>
        <dd className="user-card__value">{props.userData.name}</dd>
      </div>
      <div className="user-card__item">
        <dt className="user-card__key">город: </dt>
        <dd className="user-card__value">{props.userData.address.city}</dd>
      </div>
      <div className="user-card__item">
        <dt className="user-card__key">компания: </dt>
        <dd className="user-card__value">{props.userData.company.name}</dd>
      </div>
      <Link className="user-card__more" to={`/profile/${props.userData.id}`}>Подробнее</Link>
    </div>
  )
}