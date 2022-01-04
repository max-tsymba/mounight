export default interface IInputProps {
  className?: string;
  type: HTMLInputTypes;
  placeholder?: string;
  value?: string;
  setValue?: any;
  setError?: boolean;
}

type HTMLInputTypes =
  | 'number'
  | 'search'
  | 'button'
  | 'time'
  | 'image'
  | 'text'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'month'
  | 'password'
  | 'radio'
  | 'range';
