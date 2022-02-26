import { createContext, useState, useEffect } from "react";
import UserDataService from "../services/userservice";

import axios from "axios";



export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [currUser, setCurrUser] = useState("");

    const loginUser = (email, password) => {
        const currUser = {email:email, password:password};
        UserDataService.login(currUser)
            .then(response => {
                setCurrUser({email:email, token:response.data.token});
                localStorage.setItem("token", response.data.token);
            })
            .catch(error => {
                if (error.response.status == 400){
                    alert("invalid username or password");
                }
                console.log(error.response);
            });
        
    }

    const validateJWT = (jwt) => { // to - do
        
    }

    return (
        <UserContext.Provider value={{currUser, loginUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;