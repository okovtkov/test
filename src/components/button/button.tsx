import classNames from 'classnames';
import './button.scss';

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
      className={classNames("button", props.className, {
        'button_submit': props.type === 'submit',
        'button_disabled': props.disabled,
      })}
      disabled={props.disabled}
      onClick={props.onClick}
    >{props.children}</button>
  )
}