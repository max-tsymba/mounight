import React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import IModalProps from './types';
import styles from './styles.module.scss';

const Modal = ({ children, show, setShow }: IModalProps) => {
  const [isBrowser, setIsBrowser]: [boolean, any] = useState(false);

  const handleCloseClick: any = (e: any) => {
    e.preventDefault();
    if (e.target.className === styles.overlay) {
      setShow();
      document.body.style.overflowY = 'auto';
    }
  };

  if (show) document.body.style.overflowY = 'hidden';

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent: ReactNode = show ? (
    <div className={styles.overlay} onClick={handleCloseClick}>
      {children}
    </div>
  ) : null;

  if (isBrowser)
    // @ts-ignore
    return ReactDOM.createPortal(modalContent, document.getElementById('root'));
  else return null;
};

export default Modal;
