import { createContext } from "react";

const UserContext = createContext({
    // This default is only used if no Provider is found above a component.
    loggedInUser:"default user"
   
});

export default UserContext;
