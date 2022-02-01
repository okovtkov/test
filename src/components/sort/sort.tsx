import Button from '../button/button';
import './sort.scss';

export default function Sort() {
  return (
    <div className="sort">
      <span className="sort__label">Сортировка</span>
      <Button name="по городу" className="sort__by-city" />
      <Button name="по компании" className="sort__by-company" />
    </div>
  )
}