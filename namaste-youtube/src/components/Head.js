import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.serach);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSuggestions(searchCache[search]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      //it called everytime when your fucntion re-render.
      clearTimeout(timer);
    };
  }, [search]);

  console.log(search);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search);
    const json = await data.json();
    // console.log(json[0]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [search]: json[1],
      })
    );
  };
  return (
    <>
      <div className="flex justify-between items-center border-2 w-100% h-16 shadow-lg">
        <div className="flex ml-4 justify-center items-center">
          <img
            onClick={() => {
              toggleMenuHandler();
            }}
            className="h-7 cursor-pointer"
            src="https://icon-library.com/images/navigation-bar-icon/navigation-bar-icon-20.jpg"
            alt="Hamburger Logo"
          />
          <img
            className="h-10 pl-10 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="Youtube Logo"
          />
        </div>

        <div className="flex ">
          <input
            className="w-[550px] pl-2 border rounded-l-[50px]"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />
          <button>
            <img
              className="h-12 p-2 border rounded-r-[50px] "
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
              alt="Search Icon"
            />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((ele, index) => (
                <li
                  key={index}
                  className="py-2 px-3 shadow-sm hover:bg-gray-white"
                >
                  {ele}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex mr-16">
          <img
            className="h-6 pl-5"
            src="https://static-00.iconduck.com/assets.00/video-plus-icon-512x358-fpbzlocu.png"
            alt="Youbute create icon"
          />
          <img
            className="h-6  pl-5"
            src="https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg"
            alt="Youbute notification icon"
          />
          <img
            className="h-6 pl-5"
            src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            alt="Youtube profile icon"
          />
        </div>
      </div>
    </>
  );
};

export default Head;
