import { useMemo } from 'react';
import { SortType, UserData } from '../../types';
import UserCard from '../user-card/userCard';
import styles from './userList.module.scss';
import Loading from '../loading/loading';

interface Props {
  sortType: SortType | '';
  usersData: UserData[];
  isLoading: boolean;
}

export default function UserList(props: Props) {
  const sortedData = useMemo(() => {
    if (props.sortType === 'city') {
      const clone = [...props.usersData];
      return clone.sort((a, b) => {
        if (a.address.city > b.address.city) return 1;
        if (a.address.city < b.address.city) return -1;
        return 0;
      });
    }
    if (props.sortType === 'company') {
      const clone = [...props.usersData];
      return clone.sort((a, b) => {
        if (a.company.name > b.company.name) return 1;
        if (a.company.name < b.company.name) return -1;
        return 0;
      });
    }
    return props.usersData;
  }, [props.usersData, props.sortType]);

  return (
    <div className={styles.userList}>
      <h1 className={styles.userList__heading}>Список пользователей</h1>
      <ul className={styles.userList__list}>
        {sortedData.length > 0 ? sortedData.map((item) => (
          <li className={styles.userList__item} key={item.id}>
            <UserCard userData={item} />
          </li>
        )) : (
          <Loading />
        )}
      </ul>
      {!props.isLoading && (
        <p className={styles.userList__count}>Найдено {props.usersData.length} пользователей</p>
      )}
    </div>
  )
}
