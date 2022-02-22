import Sort from '../src/components/sort/sort';
import { SortType } from '../src/types';
import styles from '../styles/app.module.css';

interface Props {
  changeSortTypeHandler: (sortType: SortType) => void;
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <div className={styles.app}>
      <Sort onChangeSortType={props.changeSortTypeHandler} />
      <div className={styles.app__wrapper}>
        {props.children}
      </div>
    </div>
  )
}