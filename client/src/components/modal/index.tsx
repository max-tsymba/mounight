import React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import IModalProps from './types';
import styles from './styles.module.scss';

const Modal = ({ children, show }: IModalProps) => {
  const [isBrowser, setIsBrowser]: [boolean, any] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent: ReactNode = show ? (
    <div className={styles.overlay}>{children}</div>
  ) : null;

  if (isBrowser)
    return ReactDOM.createPortal(modalContent, document.getElementById('root'));
  else return null;
};

export default Modal;
