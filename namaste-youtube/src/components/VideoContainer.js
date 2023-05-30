import React, { useEffect, useState } from "react";
import { YOUTUBE_API_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_VIDEOS);
    const json = await data.json();
    // console.log(json);
    setData(json.items);
  };

  return (
    <div className="flex flex-wrap border-2">
      {data.map((ele) => (
        <Link to={"/watch?v=" + ele.id}>
          <VideoCard key={ele.id} info={ele} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
