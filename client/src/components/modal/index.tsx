import React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import IModalProps from './types';
import styles from './styles.module.scss';

const Modal = ({ children, show, onClose }: IModalProps) => {
  const [isBrowser, setIsBrowser]: [boolean, any] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick: any = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent: ReactNode = show ? (
    <div className={styles.overlay}>
      {children}
      <button onClick={handleCloseClick}>Close</button>
    </div>
  ) : null;

  if (isBrowser)
    return ReactDOM.createPortal(modalContent, document.getElementById('root'));
  else return null;
};

export default Modal;
