import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import filmApi from "../../api/fillmApi";

function Player(props) {
  let { category, id: contentId, episodeVo } = props.item;
  let episodeId = episodeVo[0].id;

  const playerRef = useRef(null);
  const [movieUrl, setMovieUrl] = useState();
  //console.log(category, contentId, episodeId);
  useEffect(() => {
    try {
      const fetchMovieUrl = async () => {
        const response = await filmApi.getMovieMedia({
          category,
          contentId,
          episodeId,
          definition: "GROOT_LD",
        });
        setMovieUrl(response.data.mediaUrl);
      };
      fetchMovieUrl();
    } catch (err) {
      console.log(err);
    }
  }, [category, contentId, episodeId]);

  useEffect(() => {
    const height = (playerRef.current.offsetWidth * 9) / 16 + "px";
    playerRef.current.setAttribute("height", height);
  }, []);

  return (
    <>
      <ReactHlsPlayer
        src={movieUrl}
        controls={true}
        width="100%"
        height="auto"
        playerRef={playerRef}
      />
    </>
  );
}

export default Player;
