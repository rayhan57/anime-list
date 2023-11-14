"use client";
import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const ModalTrailer = ({ youtubeId, show, hide }) => {
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setVideoWidth(300);
      setVideoHeight(200);
    } else {
      setVideoWidth(600);
      setVideoHeight(400);
    }
  }, []);

  const youtubeOpts = {
    width: videoWidth,
    height: videoHeight,
  };

  return (
    <>
      <Modal dismissible show={show} onClose={hide} popup>
        <Modal.Header />
        <Modal.Body>
          <YouTube videoId={youtubeId} opts={youtubeOpts} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalTrailer;
