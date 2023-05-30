import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";

const About = () => {
  return (
    <div>
      <Outlet />
      <h1>About us Page</h1>
      <p>This is namaster React and the Lecture is : Find the Path</p>
      <Profile name={"Jagdish Kumawat"} />
    </div>
  );
};

export default About;
