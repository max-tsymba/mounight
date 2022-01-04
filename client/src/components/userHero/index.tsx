import React from 'react';
import Container from '../container';
import IUserHeroProps from './types';
import styles from './styles.module.scss';
import Avatar from 'react-avatar';
import Knob from '../knob';
import { NavLink } from 'react-router-dom';
import { RoutesNames } from '../../routes';

const defaultProps: IUserHeroProps = {
  username: 'Username',
  bgCover: '',
  createdAt: '20 dec 2021',
  avatar: '',
  isCurrentUser: true,
};

const UserHero = ({
  username,
  createdAt,
  bgCover,
  avatar,
  isCurrentUser,
}: IUserHeroProps) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgCover})` }}
    >
      {isCurrentUser && (
        <NavLink to={RoutesNames.USER_SETTINGS}>
          <Knob className={styles.hero__btn}>Edit profile</Knob>
        </NavLink>
      )}
      <div className={styles.hero__rect}></div>
      <Container>
        <div className={styles.hero__inner}>
          <Avatar name={username} size="150px" round="50%" src={avatar} />
          <h1 className={styles.title}>{username}</h1>
          <p className={styles.subtitle}>Joined at {createdAt}</p>
        </div>
      </Container>
    </section>
  );
};

UserHero.defaultProps = defaultProps;

export default UserHero;
