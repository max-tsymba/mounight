import React from 'react';
import IFormProps from './types';
import styles from './styles.module.scss';

const Form = ({ children, title }: IFormProps) => {
  return (
    <div className={styles.form}>
      <div className={styles.form__content}>
        <h2 className={styles.form__title}>{title}</h2>
        <div className={styles.form__data}>{children}</div>
      </div>
    </div>
  );
};

export default Form;
