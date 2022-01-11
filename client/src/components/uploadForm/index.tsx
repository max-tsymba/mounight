import { API_MEDIA_URL } from '../../utils/conts';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../container';
import styles from './styles.module.scss';

const UploadForm = () => {
  const [drag, setDrag] = useState<boolean>(false);
  const { userId }: any = useParams();
  console.log(drag, setDrag);

  function dragStartHandler(e: any) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e: any) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e: any) {
    e.preventDefault();
    const files: any = [...e.dataTransfer.files];

    const formData: any = new FormData();
    formData.append('file', files[0]);
    axios.post(`${API_MEDIA_URL}/upload/${userId}`, formData);
    console.log(formData, userId);
  }

  return (
    <section className={styles.main}>
      <Container>
        {drag ? (
          <div
            className={styles.drag__form}
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}
          >
            Release to uploading files
          </div>
        ) : (
          <div
            className={styles.drag__form}
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
          >
            Drag and drop files to upload
          </div>
        )}
      </Container>
    </section>
  );
};

export default UploadForm;
