import { SortType } from '../../types';
import Button from '../button/button';
import './sort.scss';

interface Props {
  onChangeSortType: (sortType: SortType) => void;
}

export default function Sort(props: Props) {
  return (
    <div className="sort">
      <span className="sort__label">Сортировка</span>
      <Button
        className="sort__by-city"
        onClick={() => props.onChangeSortType('city')}
      >по городу</Button>
      <Button
        className="sort__by-company"
        onClick={() => props.onChangeSortType('company')}
      >по компании</Button>
    </div>
  )
}