import { useState, useEffect, useMemo } from 'react';
import { User } from '../../types';
import Card from '../card/card';
import { users } from '../../api/users';
import './list.scss';

interface Props {
  sortType: 'city' | 'company' | '';
}

export default function List(props: Props) {
  const [data, setData] = useState<User[] | []>([]);
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
    <div className="list">
      <h1 className="list__heading">Список пользователей</h1>
      {sortedData.length > 0 ? sortedData.map((item) => (
        <Card key={item.id} data={item} />
      )) : (
        <span className="list__loading">Загрузка...</span>
      )}
      {data.length > 0 && (
        <p className="list__count">Найдено {data.length} пользователей</p>
      )}
    </div>
  )
}