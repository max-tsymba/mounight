import React from 'react';
import IInputProps from './types';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Input = ({
  className,
  type,
  placeholder,
  value,
  setValue,
}: IInputProps) => {
  const bindClasses = classNames([styles.input, className]);
  return (
    <input
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      className={bindClasses}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
