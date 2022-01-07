import Hero from '../components/hero';
import React, { Dispatch, FunctionComponent, useEffect, useState } from 'react';
import { RootState } from '../stores';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setAllFiles } from '../stores/reducers/files.reducer';
import { API_MEDIA_URL, SERVER_URL } from '../utils/conts';
import MediaList from '../components/mediaList';
import Slider from '../components/slider';

const Home: FunctionComponent = () => {
  const usersFiles = useSelector((state: RootState) => state.medias);
  const dispatch: Dispatch<any> = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): any => {
    let cleanupFunction = false;
    const fetchMedia = async () => {
      try {
        const response: any = await axios.get(`${API_MEDIA_URL}/pictures`);
        dispatch(setAllFiles(response.data));
        if (!cleanupFunction) setLoading(false);
      } catch (e: any) {
        if (!cleanupFunction) setLoading(false);
      }
    };

    fetchMedia();
    return () => (cleanupFunction = true);
  }, [dispatch]);

  const allMedia = usersFiles.filePull;

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Hero
        title="Mounight"
        subtitle="Explore over 5,000,000 photos of artist from around the world"
      />
      <Slider />
      <MediaList />
      {allMedia.map((item: any) => (
        <img src={`${SERVER_URL}/${item.path}`} key={item.path} alt="" />
      ))}
    </div>
  );
};

export default Home;
