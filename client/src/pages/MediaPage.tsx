import Container from '../components/container';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_MEDIA_URL, SERVER_URL } from '../utils/conts';
import PictureItem from '../components/picture';
import Knob from '../components/knob';
import { downloadFile } from '../API/file';

const MediaPage = () => {
  const { mediaId }: any = useParams();
  const [responseStatus, setResponseStatus] = useState<number>(200);
  const [responseData, setResponseData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): any => {
    let cleanupFunction = false;
    const fetchUser = async () => {
      try {
        const response: any = await axios.get(
          `${API_MEDIA_URL}/pictures/${mediaId}`,
        );
        console.log(response.data);

        if (!cleanupFunction) {
          setResponseStatus(response.status);
          setResponseData(response.data);
          setLoading(false);
        }
      } catch (e: any) {
        if (!cleanupFunction) {
          setResponseStatus(e.response.status);
          setLoading(false);
        }
      }
    };
    fetchUser();

    return () => (cleanupFunction = true);
  }, [mediaId]);

  function downloadClickHandler(e: any) {
    e.stopPropagation();
    downloadFile(responseData.name, mediaId);
  }

  return responseStatus === 200 && !loading ? (
    <div>
      <Container>
        <PictureItem bgUrl={`${SERVER_URL}/${responseData.path}`}>
          <Knob
            className="absolute right-90 top-0"
            onClick={(e: any) => downloadClickHandler(e)}
          >
            Download
          </Knob>
        </PictureItem>
      </Container>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MediaPage;
