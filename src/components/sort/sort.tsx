import { sortType } from '../../types';
import Button from '../button/button';
import './sort.scss';

interface Props {
  onChangeSortType: (sortType: sortType) => void;
}

export default function Sort(props: Props) {
  return (
    <div className="sort">
      <span className="sort__label">Сортировка</span>
      <Button name="по городу" className="sort__by-city" onClick={() => props.onChangeSortType('city')} />
      <Button name="по компании" className="sort__by-company" onClick={() => props.onChangeSortType('company')} />
    </div>
  )
}