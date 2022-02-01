import { useCallback, useState } from 'react';
import './input.scss';

interface Props {
  label: string;
  value?: string;
  placeholder?: string;
  type: string;
  readOnly?: boolean;
  disabled?: boolean;
}

export default function Input(props: Props) {
  const [value, setValue] = useState(props.value);
  const changeHandler = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return (
    <div className="input">
      <label className="input__label" htmlFor={props.label}>{props.label}</label>
      {props.type !== 'textarea' ? (
        <input
          id={props.label.toLowerCase()}
          name={props.label.toLowerCase()}
          className="input__element input__input"
          type={props.type}
          value={value === undefined ? props.value : value}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          required
          onChange={changeHandler}
        />
      ) : (
        <textarea
          className="input__element input__textarea"
          name={props.label.toLowerCase()}
          rows={5}
          disabled={props.disabled}
        />
      )}
    </div>
  )
}