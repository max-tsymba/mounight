import { RootState } from '../stores';
import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserHero from '../components/userHero';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_MEDIA_URL, API_URL, SERVER_URL } from '../API';
import { setUsers } from '../stores/reducers/users.reducer';
// @ts-ignore
import error from '../assets/static/error.png';
import Container from '../components/container';
import MediaList from '../components/mediaList';
import { setFiles } from '../stores/reducers/file.reducer';

export interface ICurrentUser {
  username: string;
  email?: string;
  id?: string;
  isActivated?: boolean;
}

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const searchedUser = useSelector((state: any) => state.users);
  const userFiles = useSelector((state: RootState) => state.media);
  const dispatch: Dispatch<any> = useDispatch();
  const { userId }: any = useParams();
  const [responseStatus, setResponseStatus] = useState<number>(200);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): any => {
    let cleanupFunction = false;
    const fetchUser = async () => {
      try {
        const response: any = await axios.get(`${API_URL}/users/${userId}`);
        dispatch(setUsers(response.data));

        if (!cleanupFunction) setResponseStatus(response.status);
      } catch (e: any) {
        if (!cleanupFunction) setResponseStatus(e.response.status);
      }
    };
    fetchUser();

    return () => (cleanupFunction = true);
  }, [dispatch, userId]);

  useEffect((): any => {
    let cleanupFunction = false;
    const fetchMedia = async () => {
      try {
        const response: any = await axios.get(
          `${API_MEDIA_URL}/user/${userId}`,
        );
        dispatch(setFiles(response.data));
        if (!cleanupFunction) setLoading(false);
      } catch (e: any) {
        if (!cleanupFunction) setLoading(false);
      }
    };

    fetchMedia();
    return () => (cleanupFunction = true);
  }, [dispatch, userId]);

  const { username }: any = searchedUser.user;
  const media: any = userFiles.files;
  const isCurrentUser = user.currentUser.id === searchedUser.user._id;

  return responseStatus === 200 && !loading ? (
    <>
      <UserHero username={username} isCurrentUser={isCurrentUser} />
      <MediaList />
      {media.map((item: any) => (
        <img src={`${SERVER_URL}/${item.path}`} key={item.path} alt="" />
      ))}
    </>
  ) : (
    <section>
      <Container>
        <img
          style={{ width: '600px', margin: '0 auto' }}
          src={error}
          alt="error"
        />
      </Container>
    </section>
  );
};

export default UserPage;
