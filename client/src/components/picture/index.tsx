import React from 'react';
import { IPictureProps } from './types';
import styles from './styles.module.scss';

const PictureItem = ({ children, bgUrl }: IPictureProps) => {
  return (
    <div className={styles.bg__hero}>
      <div
        className={styles.bg__cover}
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        {children}
      </div>
    </div>
  );
};

export default PictureItem;
