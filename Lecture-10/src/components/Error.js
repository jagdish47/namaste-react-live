import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError();

  //   let { status, statusText } = useRouteError(); //You can destructure Directly

  console.log(err);

  return (
    <>
      <div id="main">
        <div class="fof">
          <h1>{err.status + " " + err.statusText}</h1>
          <p>{err.data}</p>
        </div>
      </div>
    </>
  );
};

export default Error;
