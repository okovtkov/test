import classNames from 'classnames';
import './button.scss';

interface Props {
  className?: string;
  name: string;
  type?: 'submit' | 'button';
  disabled?: boolean;
}

export default function Button(props: Props) {
  return (
    <button
      className={classNames("button", props.className, {
        'button__submit': props.type === 'submit',
        'button__disabled': props.disabled,
      })}
      disabled={props.disabled}
    >{props.name}</button>
  )
}