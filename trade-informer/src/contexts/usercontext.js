import { createContext, useState } from "react";
import UserDataService from "../services/userservice";

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
                console.log(error.response.data);
            });
        
    }

    const registerUser = (firstName, lastName, email, password, ) => {
        const newUser = {firstName: firstName, lastName:lastName, email:email, password:password};
        UserDataService.register(newUser)
            .then(response => {
                setCurrUser({email:email, token:response.data.token});
                if (localStorage.getItem("token")){
                    localStorage.removeItem("token");
                    localStorage.setItem("token", response.data.token);
                } else {
                    localStorage.setItem("token", response.data.token);
                }
                return "success";
            })
            .catch(error => {
                if (error.response.status == 400){
                    alert("invalid parameters.")
                }
                console.log(error.response.data);
            });
    }

    return (
        <UserContext.Provider value={{currUser, loginUser, registerUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;