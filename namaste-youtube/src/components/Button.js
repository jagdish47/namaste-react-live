const Button = () => {
  const buttonList = [
    "All",
    "Computer Programming",
    "Data Structure",
    "IPL",
    "India",
    "Bollywood Music",
    "Mixes",
    "Trailer",
    "Live",
    "News",
    "Cricket",
    "ReactJS",
    "CSS",
    "Tailwind",
  ];

  return (
    <div>
      {buttonList.map((ele, index) => (
        <button
          key={index}
          className="px-5 py-2 mt-3 ml-3 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          {ele}
        </button>
      ))}
    </div>
  );
};

export default Button;
