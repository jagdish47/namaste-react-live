import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const partOne = [
    {
      name: "Home",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png",
      alt: "Home Icon Image",
    },
    {
      name: "Shorts",
      url: "https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg",
      alt: "Shorts Icon Image",
    },
    {
      name: "Subscriptions",
      url: "https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png",
      alt: "Subscriptions Icon Image",
    },
    {
      name: "Library",
      url: "https://cdn.icon-icons.com/icons2/1863/PNG/512/video-library_118500.png",
      alt: "Library Icon Image",
    },
    {
      name: "History",
      url: "https://w7.pngwing.com/pngs/988/206/png-transparent-computer-icons-history-icon-design-time-angle-text-logo-thumbnail.png",
      alt: "History Icon Image",
    },
    {
      name: "Your Videos",
      url: "https://icon-library.com/images/youtube-video-icon-png/youtube-video-icon-png-27.jpg",
      alt: "Your Videos Icon Image",
    },
    {
      name: "Watch Later",
      url: "https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png",
      alt: "Watch Later Icon Image",
    },
    {
      name: "Downloads",
      url: "https://cdn-icons-png.flaticon.com/512/724/724933.png",
      alt: "Downloads Icon Image",
    },
    {
      name: "Liked Videos",
      url: "https://p.kindpng.com/picc/s/129-1293111_like-symbol-for-interface-of-black-hand-shape.png",
      alt: "Liked Videos Icon Image",
    },
  ];

  if (!isMenuOpen) return null; //this is known as early return (you can use ternary operator also)

  return (
    <>
      <div className="w-64 h-[100vh] border-2 p-4 fixed left-0">
        {partOne.map((ele, index) => (
          <div
            className="flex mb-2 hover:bg-[#f5f5f5] rounded-lg cursor-pointer p-2"
            key={index}
          >
            <img className="h-6 pr-4" src={ele.url} alt="Home Icon" />
            {/* {console.log(ele)} */}
            <span>{ele.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
