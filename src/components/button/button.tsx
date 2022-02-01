import classNames from 'classnames';
import './button.scss';

interface Props {
  className?: string;
  name: string;
  type?: 'submit' | 'button';
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button(props: Props) {
  return (
    <button
      type={props.type}
      className={classNames("button", props.className, {
        'button__submit': props.type === 'submit',
        'button__disabled': props.disabled,
      })}
      disabled={props.disabled}
      onClick={props.onClick}
    >{props.name}</button>
  )
}