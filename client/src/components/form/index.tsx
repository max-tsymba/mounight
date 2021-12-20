import React from 'react';
import IFormProps from './types';
import styles from './styles.module.scss';
import Button from '../button';

const Form = ({ children, buttonText, onSubmit, title }: IFormProps) => {
  return (
    <div className={styles.form}>
      <div className={styles.form__content}>
        <h2 className={styles.form__title}>{title}</h2>
        <div className={styles.form__data}>{children}</div>
        <Button onClick={onSubmit}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default Form;
