import React from 'react';
import IInputProps from './types';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Input = ({
  className,
  type,
  placeholder,
  setValue,
  setError,
  value,
}: IInputProps) => {
  const bindClasses = classNames([styles.input, className]);
  return (
    <label>
      <input
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        className={bindClasses}
        type={type}
        placeholder={placeholder}
        autoComplete="new-password"
      />
      {setError && <p className={styles.error}>Error</p>}
    </label>
  );
};

export default Input;
