import React from 'react';
import Container from '../container';
import hero from '../../assets/static/hero-bg.png';
import styles from './styles.module.scss';
import IHeroProps from './types';

const Hero = ({ title, subtitle }: IHeroProps) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${hero})` }}
    >
      <Container>
        <div className={styles.hero__inner}>
          <h1 className={styles.hero__title}>{title}</h1>
          <p className={styles.hero__subtitle}>{subtitle}</p>
          <div>Search Bar</div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
