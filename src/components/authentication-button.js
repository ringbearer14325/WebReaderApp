import React from "react";


import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auht/auth0-react";


const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();
    

    return isAuthenticated ? <LogoutButton /> : <LoginButton />;


};



export default AuthenticationButton;

