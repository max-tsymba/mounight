import React from 'react';
import Container from '../container';
import IUserHeroProps from './types';
// @ts-ignore
import bg from '../../assets/static/hero-bg.png';
import styles from './styles.module.scss';
import Avatar from '../avatar';

const defaultProps: IUserHeroProps = {
  username: 'Username',
  bgCover: 'bgCover',
  createdAt: '20 dec 2021',
  avatar: 'avatar',
};

const UserHero = ({ username, createdAt, bgCover, avatar }: IUserHeroProps) => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${bg})` }}>
      <Container>
        <div className={styles.hero__inner}>
          <Avatar />
          <h1 className={styles.title}>{username}</h1>
          <p className={styles.subtitle}>Jouned at {createdAt}</p>
          <div>
            Hero {avatar} {bgCover}
          </div>
        </div>
      </Container>
    </section>
  );
};

UserHero.defaultProps = defaultProps;

export default UserHero;
