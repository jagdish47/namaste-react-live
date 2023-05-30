import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    gmail: "dummy@gmail.com",
  },
});

export default UserContext;
