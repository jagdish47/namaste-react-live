const Loader = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-[1600px] grid grid-cols-5 gap-5 justify-center items-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="h-96 w-72 bg-gray-300 rounded-md mx-2 "></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
