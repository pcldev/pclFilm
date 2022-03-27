import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import { useParams } from "react-router-dom";
import filmApi from "../../api/fillmApi";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import { useMemo } from "react";
import { convertSrtToVtt } from "../../share/convertSrtToVtt";

const convertQualityToString = (groot) => {
  if (groot === "GROOT_HD") {
    return "Full HD";
  } else if (groot === "GROOT_SD") {
    return 720;
  } else if (groot === "GROOT_LD") {
    return 540;
  }
};

function MoviePlayer(props) {
  const params = useParams();
  let { category, id: contentId, episodeVo } = props.item;
  let episodeId =
    episodeVo.length > 1 ? episodeVo[params.category]?.id : episodeVo[0]?.id;
  const typeGroot = useMemo(
    () => episodeVo[0].definitionList.map((def) => def.code),
    [episodeVo]
  );
  const subtitleObj = {
    lang: "",
    language: "",
    url: "",
  };
  const subtitleList = [];
  props.item.episodeVo[params.category]?.subtitlingList.forEach((sub) => {
    const subtitles = Object.create(subtitleObj);
    subtitles.lang = sub.languageAbbr;
    subtitles.language = sub.language;
    subtitles.url = convertSrtToVtt(sub.subtitlingUrl);
    subtitleList.push(subtitles);
  });

  const playerRef = useRef(null);
  const [movieUrl, setMovieUrl] = useState();

  useEffect(() => {
    try {
      const fetchMovieUrl = async () => {
        const response = await Promise.all(
          typeGroot.map(async (typeG) => {
            return await filmApi.getMovieMedia({
              category,
              contentId,
              episodeId,
              definition: typeG,
            });
          })
        ).then((values) => values);
        const newArrMediaUrl = [];
        response.forEach((dat) => {
          newArrMediaUrl.push({
            quality: convertQualityToString(dat.data.currentDefinition),
            url: dat.data.mediaUrl,
          });
        });
        setMovieUrl(newArrMediaUrl);
      };
      fetchMovieUrl();
    } catch (err) {
      console.log(err);
    }
  }, [category, contentId, episodeId, typeGroot]);

  useEffect(() => {
    const height = (playerRef?.current?.offsetWidth * 9) / 16 + "px";
    playerRef?.current?.setAttribute("height", height);
  }, []);
  // console.log(movieUrl);

  return (
    <>
      {/* {movieUrl && (
        // movieUrl.map((mov, index) => (
        //   <ReactHlsPlayer
        //     key={index}
        //     src={mov}
        //     controls={true}
        //     width="100%"
        //     height="auto"
        //     playerRef={playerRef}
        //   />
        // ))
        <ReactHlsPlayer
          src={movieUrl}
          controls={true}
          width="100%"
          height="auto"
          playerRef={playerRef}
        />
      )} */}
      {/* {movieUrl &&
        movieUrl.map((mov, index) => (
          <ReactHlsPlayer
            key={index}
            src={mov}
            controls={true}
            width="100%"
            height="auto"
            playerRef={playerRef}
          />
        ))} */}
      {movieUrl && (
        <Player
          src={movieUrl}
          subtitles={subtitleList}
          poster={props.item.coverHorizontalUrl}
        >
          {(ref, props) => <ReactHlsPlayer playerRef={ref} {...props} />}
        </Player>
        // <ReactHlsPlayer
        //   src={movieUrl}
        //   controls={true}
        //   width="100%"
        //   height="auto"
        //   playerRef={playerRef}
        // />
      )}
    </>
  );
}

export default MoviePlayer;
