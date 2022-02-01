import classNames from 'classnames';
import './button.scss';

interface Props {
  className?: string;
  name: string;
}

export default function Button(props: Props) {
  return (
    <button className={classNames("button", props.className)}>{props.name}</button>
  )
}