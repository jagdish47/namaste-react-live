import React, { useState } from "react";

const Search = ({ setRestaurant }) => {
  const [text, setText] = useState("");

  function handleSearch(e) {
    setText(e.target.value);
  }

  console.log(text);

  return (
    <div>
      <input
        type={text}
        placeholder="Search Your Food"
        className="w-[500px] px-4 py-2 ml-5 rounded-md bg-gray-100 focus:outline-none"
        onChange={handleSearch}
      />
      <button
        className="bg-gray-200 hover:bg-gray-600 text-white font-bold py-1 px-4 rounded ml-5 text-black"
        onClick={() => {
          console.log("clicked...");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
