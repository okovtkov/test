import './sort.scss';

export default function Sort() {
  return (
    <div className="sort">
      <span className="sort__label">Сортировка</span>
      <button className="sort__button sort__by-city">по городу</button>
      <button className="sort__button sort__by-company">по компании</button>
    </div>
  )
}