import { RoutesNames } from '../../routes/index';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button';
import Container from '../container';
import logo from '../../assets/static/logo.svg';
import userIcon from '../../assets/static/user.png';
import styles from './styles.module.scss';
import AuthService from '../../services/AuthService';
import { RootState } from '@/stores';
import { useSelector } from 'react-redux';
import IHeaderProps from './types';
import SignModal from '../registrationModal';
import LogModal from '../loginModal';

const Header = ({ dispatch }: IHeaderProps) => {
  const [showRegModal, setShowRegModal]: [boolean, any] = useState(false);
  const [showLoginModal, setShowLoginModal]: [boolean, any] = useState(false);
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <NavLink to={RoutesNames.HOME}>
            <img src={logo} alt="logo" />
          </NavLink>

          <div className={styles.header__btns}>
            {isAuth ? (
              <>
                <NavLink
                  to={RoutesNames.USERS + `/${user.currentUser.id}`}
                  className={styles.header__account}
                >
                  <img src={userIcon} alt="" />
                </NavLink>
                <Button onClick={() => dispatch(AuthService.logout())}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button theme="light" onClick={() => setShowRegModal(true)}>
                  Sign Up
                </Button>
                <Button onClick={() => setShowLoginModal(true)}>Log in</Button>
              </>
            )}
          </div>

          <SignModal
            show={showRegModal}
            setShow={() => setShowRegModal(false)}
          />

          <LogModal
            show={showLoginModal}
            setShow={() => setShowLoginModal(false)}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
