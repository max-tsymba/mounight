import React from 'react';
import IFormProps from './types';
import styles from './styles.module.scss';
import Button from '../button';
// @ts-ignore
import close from '../../assets/static/close.png';

const Form = ({
  children,
  buttonText,
  onSubmit,
  title,
  onClose,
}: IFormProps) => {
  const handleCloseClick: any = (e: any) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__content}>
        <h2 className={styles.form__title}>{title}</h2>
        <div className={styles.form__data}>{children}</div>
        <Button onClick={onSubmit}>{buttonText}</Button>
      </div>
      <button className={styles.close__btn} onClick={handleCloseClick}>
        <img src={close} alt="" />
      </button>
    </div>
  );
};

export default Form;
