import { SortType } from '../../types';
import Button from '../button/button';
import styles from './sort.module.scss';

interface Props {
  onChangeSortType: (sortType: SortType) => void;
}

export default function Sort(props: Props) {
  return (
    <div className={styles.sort}>
      <span className={styles.sort__label}>Сортировка</span>
      <Button
        className={styles.sort__byCity}
        onClick={() => props.onChangeSortType('city')}
      >по городу</Button>
      <Button
        className={styles.sort__byCompany}
        onClick={() => props.onChangeSortType('company')}
      >по компании</Button>
    </div>
  )
}
