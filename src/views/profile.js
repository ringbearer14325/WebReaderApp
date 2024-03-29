import React from "react";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/Loading";



const profile = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;
    

    return (
        <div>
            <div className="row align-items-center profile-center">
                <div className="col-md-2 mb-3">
                    <img 
                    src={picture}
                    alt="Profile"
                    className="rounded-circle img-fluid profile-pictuire mb-3 mb-md-0">
                    </img>
                </div>
                <div className="col-md text-center text-md-left">
                    <h2>{name}</h2>
                    <p className="lead text-muted">{email}</p>
                </div>
            <div className="row"></div>
            <pre className="col-12 text-light bg-dark p-4">
                {JSON.stringify(user, null, 2)}
            </pre>
            </div>
        </div>  
    );    
};


export default withAuthenticationRequired(profile, {
    onRedirecting: () => <Loading />
});
