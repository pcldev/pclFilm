import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import { useParams } from "react-router-dom";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import filmApi from "../../api/fillmApi";
import { convertSrtToVtt, resizeImage } from "../../share/tools";
import Error from "../Error/Error";
import { Beforeunload, useBeforeunload } from "react-beforeunload";
import { convertQualityToString } from "../../share/utils";
import useAsync from "../../hooks/useAsync";

function MoviePlayer(props) {
  const params = useParams();
  let { category, id: contentId, episodeVo } = props.item;
  let episodeId =
    episodeVo.length > 1 ? episodeVo[params.category]?.id : episodeVo[0]?.id;
  const typeGroot = useMemo(
    () => episodeVo[0].definitionList.map((def) => def.code),
    [episodeVo]
  );

  const subtitleList = [];

  props.item.episodeVo[
    props.item.episodeVo[params.category] ? params.category : 0
  ].subtitlingList.forEach((sub) => {
    const subtitles = {};
    subtitles.lang = sub.languageAbbr;
    subtitles.language = sub.language;
    subtitles.url = convertSrtToVtt(sub.subtitlingUrl);
    subtitleList.push(subtitles);
  });

  const playerRef = useRef(null);
  const [movieUrl, setMovieUrl] = useState(null);
  // const [playerCurrentTime, setPlayerCurrentTime] = useState(null);

  // const pastTime = localStorage.getItem(`${contentId}/${params.category}`);

  // if(playerRef.current){
  //   playerRef.current.currentTime = pastTime;

  // }

  // const savedCurrentTimeVideo = () => {
  //   if (pastTime === "0" || !pastTime) {
  //     localStorage.setItem(
  //       `${contentId}/${params.category}`,
  //       playerRef.current.currentTime
  //     );
  //   }
  // };

  const fetchData = useCallback(async () => {
    try {
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
          quality: convertQualityToString(dat.data?.currentDefinition),
          url: dat.data.mediaUrl,
        });
      });
      return newArrMediaUrl;
    } catch (err) {
      return <Error message={err.message} />;
    }
  }, [category, episodeId, contentId, typeGroot]);

  useAsync(fetchData, setMovieUrl);

  useEffect(() => {
    const height = (playerRef?.current?.offsetWidth * 9) / 16 + "px";
    playerRef?.current?.setAttribute("height", height);
  }, []);

  // useEffect(() => {
  //   console.log(playerRef);
  //   if (playerRef.current) {
  //     if (playerRef.current.duration !== 0) {
  //       console.log("check");
  //       playerRef.current.currentTime = pastTime;
  //     }
  //     //setPlayerCurrentTime()
  //   }
  // }, [movieUrl, pastTime]);

  return (
    <>
      {/* <Beforeunload onBeforeunload={savedCurrentTimeVideo}> */}
      {movieUrl && (
        <Player
          src={movieUrl}
          subtitles={subtitleList}
          poster={resizeImage(props.item.coverHorizontalUrl, "900")}
          playerRef={playerRef}
        >
          {(ref, props) => <ReactHlsPlayer playerRef={ref} {...props} />}
        </Player>
      )}
      {/* </Beforeunload> */}
    </>
  );
}

export default MoviePlayer;
