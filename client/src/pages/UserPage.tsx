import { RootState } from '../stores';
import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserHero from '../components/userHero';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { setUserPull } from '../stores/reducers/users.reducer';
import error from '../assets/static/error.png';
import Container from '../components/container';
import { setFiles } from '../stores/reducers/file.reducer';
import { API_AUTH_URL, API_MEDIA_URL, SERVER_URL } from '../utils/conts';
import UploadForm from '../components/uploadForm';
import MediaList from '../components/mediaList';

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const users = useSelector((state: RootState) => state.users);
  const userMedia = useSelector((state: RootState) => state.media);
  const dispatch: Dispatch<any> = useDispatch();
  const { userId }: any = useParams();
  const [responseStatus, setResponseStatus] = useState<number>(200);
  const [loading, setLoading] = useState<boolean>(true);
  let counter = 0;
  let joinDate = '';

  useEffect((): any => {
    let cleanupFunction = false;
    const fetchUser = async () => {
      try {
        const response: any = await axios.get(
          `${API_AUTH_URL}/users/${userId}`,
        );
        dispatch(setUserPull(response.data));
        console.log(response.data);

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

  const { username, createdAt, avatar, bg_cover }: any = users.userPull;
  const media: any = userMedia.files;
  const isCurrentUser = user.currentUser.id === users.userPull._id;

  media.forEach(() => counter++);
  console.log(counter);

  if (responseStatus === 200 && !loading) {
    const date = new Date(createdAt);
    joinDate = date.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return responseStatus === 200 && !loading ? (
    <>
      <UserHero
        username={username}
        isCurrentUser={isCurrentUser}
        createdAt={joinDate}
        avatar={avatar}
        bgCover={bg_cover}
        mediaCount={counter}
      />
      <UploadForm />
      <MediaList>
        {media.map((item: any) => (
          <img src={`${SERVER_URL}/${item.path}`} alt="" key={item._id} />
        ))}
      </MediaList>
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
