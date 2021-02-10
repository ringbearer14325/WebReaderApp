import React from "react";
import { useAuth0 } from "0auth0/auth0-react";

const signUpButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button 
        className="btn btn-primary btn-block"
        onClick={() => 
            loginWithRedirect({
                screen_hint: "signup",
            })
        }
        >
            Sign up
        </button>

    );
    
};

export default signUpButton;


