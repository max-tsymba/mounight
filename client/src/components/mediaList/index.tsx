import React from 'react';
import Container from '../container';
import styles from './styles.module.scss';
import { IMediaListProps } from './types';

const MediaList = ({ children }: IMediaListProps) => {
  return (
    <section className={styles.main}>
      <Container>
        <div className={styles.list}>{children}</div>
      </Container>
    </section>
  );
};

export default MediaList;
