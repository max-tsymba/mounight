import { RootState } from '../stores';
import React from 'react';
import { useSelector } from 'react-redux';
import UserHero from '../components/userHero';
import { useParams } from 'react-router-dom';

export interface ICurrentUser {
  username: string;
  email: string;
  id: string;
  isActivated: boolean;
}

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const { userId }: any = useParams();

  console.log(userId);

  const { username, email, id, isActivated }: ICurrentUser = user.currentUser;
  console.log(email, id, isActivated);
  return (
    <>
      <UserHero username={username} />
    </>
  );
};

export default UserPage;
