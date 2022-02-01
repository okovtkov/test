import { User } from '../../types';
import Card from '../card/card';
import './list.scss';

interface Props {
  data: User[] | null;
}

export default function List(props: Props) {
  return (
    <div className="list">
      <h1 className="list__heading">Список пользователей</h1>
      {props.data ? props.data.map((item) => (
        <Card key={item.id} data={item} />
      )) : (
        <span className='list__loading'>Загрузка...</span>
      )}
    </div>
  )
}