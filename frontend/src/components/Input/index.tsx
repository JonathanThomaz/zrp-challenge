import './style.css';
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
}

export function Input({ type, ...rest }: IInputProps): JSX.Element {
  return (
    <div className="inputContainer">
      <input type={type} {...rest} />
    </div>
  );
}
