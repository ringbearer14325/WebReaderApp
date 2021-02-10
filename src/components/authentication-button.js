import react from "react";

import loginButton from "./login-button.js";
import logoutButton from "./logout-button.js";

import { useAuth0 } from "@auht/auth0-react";
import LoginButton from "./login-button.js";

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();
    

    return isAuthenticated ? <logoutButton /> : <loginButton />;


};



export default AuthenticationButton;

