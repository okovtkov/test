import { ChangeEvent, useCallback, useState } from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';

interface Props {
  label: string;
  value?: string;
  placeholder?: string;
  type: string;
  readOnly?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export default function Input(props: Props) {
  const [value, setValue] = useState(props.value);
  const changeHandler = useCallback((event) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  }, [props]);

  return (
    <div className={classNames(styles.input)}>
      <label className={classNames(styles.input__label)} htmlFor={props.label}>{props.label}</label>
      {props.type !== 'textarea' ? (
        <input
          id={props.label.toLowerCase()}
          name={props.label.toLowerCase()}
          className={classNames(styles.input__element, styles.input_input)}
          type={props.type}
          value={value === undefined ? props.value : value}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          required
          onChange={changeHandler}
        />
      ) : (
        <textarea
          className={classNames(styles.input__element, styles.input_textarea)}
          name={props.label.toLowerCase()}
          rows={5}
          disabled={props.disabled}
          onChange={changeHandler}
        />
      )}
    </div>
  )
}