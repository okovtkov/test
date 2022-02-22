import Link from 'next/link';
import { UserData } from '../../types';
import styles from './userCard.module.scss';

interface Props {
  userData: UserData;
}

export default function UserCard(props: Props) {
  return (
    <div className={styles.userCard}>
      <div className={styles.userCard__item}>
        <dt className={styles.userCard__key}>ФИО: </dt>
        <dd className={styles.userCard__value}>{props.userData.name}</dd>
      </div>
      <div className={styles.userCard__item}>
        <dt className={styles.userCard__key}>город: </dt>
        <dd className={styles.userCard__value}>{props.userData.address.city}</dd>
      </div>
      <div className={styles.userCard__item}>
        <dt className={styles.userCard__key}>компания: </dt>
        <dd className={styles.userCard__value}>{props.userData.company.name}</dd>
      </div>
      <Link href={`/user/${props.userData.id}`}>
        <a className={styles.userCard__more}>Подробнее</a>
      </Link>
    </div>
  )
}