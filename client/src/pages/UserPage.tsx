import { RootState } from '../stores';
import React from 'react';
import { useSelector } from 'react-redux';
import UserHero from '../components/userHero';

export interface ICurrentUser {
  username: string;
  email: string;
  id: string;
  isActivated: boolean;
}

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const { username, email, id, isActivated }: ICurrentUser = user.currentUser;
  console.log(email, id, isActivated);
  return (
    <>
      <UserHero username={username} />
    </>
  );
};

export default UserPage;
