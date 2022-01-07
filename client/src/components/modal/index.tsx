import React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import IModalProps from './types';
import styles from './styles.module.scss';
import close from '../../assets/static/close.png';

const Modal = ({ children, show, setShow, setErrors }: IModalProps) => {
  const [isBrowser, setIsBrowser]: [boolean, any] = useState(false);

  const handleCloseClick: any = (e: any) => {
    e.preventDefault();
    if (e.target.className === styles.overlay) {
      handleClick();
      document.body.style.overflowY = 'auto';
    }
  };

  const handleClick: any = () => {
    setShow();
    setErrors();
  };

  if (show) document.body.style.overflowY = 'hidden';

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent: ReactNode = show ? (
    <div className={styles.overlay} onClick={handleCloseClick}>
      <div className="relative">
        {children}
        <button className={styles.close__btn} onClick={handleClick}>
          <img src={close} alt="" />
        </button>
      </div>
    </div>
  ) : null;

  if (isBrowser)
    // @ts-ignore
    return ReactDOM.createPortal(modalContent, document.getElementById('root'));
  else return null;
};

export default Modal;
