import { useState } from "react";
import { createContext } from "react";
import data from "../data.json";

export const CurrentUserContext = createContext();


function CurrentUserProvider(props){
    const currentUserData = data["currentUser"]

    const [currentUser,setCurrentUser] = useState(currentUserData)
    const [userData,setData] = useState(data) 
    return <CurrentUserContext.Provider value={{currentUser,setCurrentUser,data,setData}}>
        {props.children}
    </CurrentUserContext.Provider>
}


export default CurrentUserProvider;