import './input.scss';

interface Props {
  label: string;
  value?: string;
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
  disabled: boolean;
}

export default function Input(props: Props) {
  return (
    <div className="input">
      <label className="input__label">{props.label}</label>
      {props.type !== 'textarea' ? (
        <input
          name="props.label"
          className="input__input"
          type="text"
          value={props.value}
          disabled={props.disabled}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
        />
      ) : (
        <textarea
          className="input__textarea"
          name={props.label.toLowerCase()}
          rows={5}
          disabled={props.disabled}
        />
      )}
    </div>
  )
}