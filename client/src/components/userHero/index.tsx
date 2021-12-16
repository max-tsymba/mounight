import React from 'react';
import Container from '../container';
import IUserHeroProps from './types';
// @ts-ignore
import bg from '../../assets/static/hero-bg.png';
// @ts-ignore
import ava from '../../assets/static/ava.png';
import styles from './styles.module.scss';
import Avatar from 'react-avatar';

const defaultProps: IUserHeroProps = {
  username: 'Byte Story',
  bgCover: bg,
  createdAt: '20 dec 2021',
  avatar: ava,
};

const UserHero = ({ username, createdAt, bgCover, avatar }: IUserHeroProps) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgCover})` }}
    >
      <Container>
        <div className={styles.hero__inner}>
          <Avatar name={username} round="50%" src={avatar} />
          <h1 className={styles.title}>{username}</h1>
          <p className={styles.subtitle}>Jouned at {createdAt}</p>
        </div>
      </Container>
    </section>
  );
};

UserHero.defaultProps = defaultProps;

export default UserHero;
