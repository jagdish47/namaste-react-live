import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-3 border w-80 shadow-sm p-2 w-[370px]">
      <img
        className="rounded-md"
        alt="Youtube Thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold my-1">{title}</li>
        <li className="mt-1">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
