import { RootState } from '../stores';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserHero from '../components/userHero';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../API';

export interface ICurrentUser {
  username: string;
  email?: string;
  id?: string;
  isActivated?: boolean;
}

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const { userId }: any = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: any = await axios.get(`${API_URL}/users/${userId}`);
        console.log(response);
      } catch (e: any) {
        console.log(e.response?.data?.message);
      }
    };
    fetchUser();
  }, [userId]);

  const { username }: ICurrentUser = user.currentUser;
  return (
    <>
      <UserHero username={username} />
    </>
  );
};

export default UserPage;
