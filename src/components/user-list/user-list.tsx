import { useState, useEffect, useMemo } from 'react';
import { SortType, UserData } from '../../types';
import UserCard from '../user-card/userCard';
import { users } from '../../api/users';
import './user-list.scss';
import Loading from '../loading/loading';

interface Props {
  sortType: SortType | '';
}

export default function UserList(props: Props) {
  const [data, setData] = useState<UserData[] | []>([]);
  const sortedData = useMemo(() => {
    if (props.sortType === 'city') {
      const clone = [...data];
      return clone.sort((a, b) => {
        if (a.address.city > b.address.city) return 1;
        if (a.address.city < b.address.city) return -1;
        return 0;
      });
    }
    if (props.sortType === 'company') {
      const clone = [...data];
      return clone.sort((a, b) => {
        if (a.company.name > b.company.name) return 1;
        if (a.company.name < b.company.name) return -1;
        return 0;
      });
    }
    return data;
  }, [data, props.sortType]);

  useEffect(() => {
    users.get().then((data) => setData(data));
  }, []);

  return (
    <div className="user-list">
      <h1 className="user-list__heading">Список пользователей</h1>
      <ul className="user-list__list">
        {sortedData.length > 0 ? sortedData.map((item) => (
          <li className="user-list__item" key={item.id}>
            <UserCard userData={item} />
          </li>
        )) : (
          <Loading />
        )}
      </ul>
      {data.length > 0 && (
        <p className="user-list__count">Найдено {data.length} пользователей</p>
      )}
    </div>
  )
}