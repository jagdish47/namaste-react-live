import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>-: ERROR :-</h1>
      <p>{err.status}</p>
      <p>{err.data}</p>
    </div>
  );
};

export default Error;
