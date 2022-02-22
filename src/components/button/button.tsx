import classNames from 'classnames';
import styles from './button.module.scss';

interface Props {
  className?: string;
  type?: 'submit' | 'button';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button(props: Props) {
  return (
    <button
      type={props.type}
      className={classNames(styles.button, props.className, {
        [styles.button_submit]: props.type === 'submit',
        [styles.button_disabled]: props.disabled,
      })}
      disabled={props.disabled}
      onClick={props.onClick}
    >{props.children}</button>
  )
}