import React from 'react';
import IInputProps from './types';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Input = ({ className, type, placeholder }: IInputProps) => {
  const bindClasses = classNames([styles.input, className]);
  return (
    <input className={bindClasses} type={type} placeholder={placeholder} />
  );
};

export default Input;
