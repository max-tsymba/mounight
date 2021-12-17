import React from 'react';
import IFormProps from './types';
import styles from './styles.module.scss';
import Button from '../button';

const Form = ({ children, buttonText, onSubmit }: IFormProps) => {
  return (
    <div className={styles.form}>
      {children}
      <Button onClick={onSubmit}>{buttonText}</Button>
    </div>
  );
};

export default Form;
