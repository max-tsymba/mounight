import { RoutesNames } from '../../routes/index';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button';
import Container from '../container';
// @ts-ignore
import logo from '../../assets/static/logo.svg';
// @ts-ignore
import user from '../../assets/static/user.png';
import styles from './styles.module.scss';
import Modal from '../modal';
import Form from '../form';
import Input from '../input';
import AuthService from '../../services/AuthService';
import { RootState } from '@/stores';
import { useSelector } from 'react-redux';
import IHeaderProps from './types';

const Header = ({ dispatch }: IHeaderProps) => {
  const [showRegModal, setShowRegModal]: [boolean, any] = useState(false);
  const [showLoginModal, setShowLoginModal]: [boolean, any] = useState(false);
  const [username, setUsername]: [string, any] = useState('');
  const [email, setEmail]: [string, any] = useState('');
  const [password, setPassword]: [string, any] = useState('');
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

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
                  to={RoutesNames.USER_PAGE}
                  className={styles.header__account}
                >
                  <img src={user} alt="" />
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

          <Modal show={showRegModal}>
            <Form title="Sign Up" onClose={() => setShowRegModal(false)}>
              <Input
                value={username}
                setValue={setUsername}
                type="text"
                placeholder="Enter username"
              />
              <Input
                value={email}
                setValue={setEmail}
                type="email"
                placeholder="Enter email"
              />
              <Input
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Enter password"
              />
              <Button
                onClick={() => {
                  dispatch(
                    AuthService.registration(username, email, password),
                  ).then((result: number) => {
                    if (result) setShowRegModal(false);
                  });
                }}
              >
                Sign Up
              </Button>
            </Form>
          </Modal>

          <Modal show={showLoginModal}>
            <Form title="Log In" onClose={() => setShowLoginModal(false)}>
              <Input
                value={email}
                setValue={setEmail}
                type="email"
                placeholder="Enter email"
              />
              <Input
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Enter password"
              />
              <Button
                onClick={() => {
                  dispatch(AuthService.login(email, password)).then(
                    (result: number) => {
                      if (result) setShowLoginModal(false);
                    },
                  );
                }}
              >
                Log In
              </Button>
            </Form>
          </Modal>
        </div>
      </Container>
    </header>
  );
};

export default Header;
