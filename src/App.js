import React  from 'react';
import './css/App.css';
import {
  Route,
  Switch
} from 'react-router-dom';

import Dashboard from './components/dashboard'; 
//import { NavBar, Loading } from "./components";
//import { Home, Profile, ExternalApi } from "./views"; 
import ProtectedRoute from "./auth/protected-route";
import { useAuth0 } from '@auth0/auth0-react';



function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
  //return <Loading />;

}

    return (
      <div id="app" className="d-flex flex-column h-100">
        <NavBar></NavBar>
        <div className="container flex-grow-1">
              <Switch> 
              <Route path="/" exact component={Home} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/external-api" component={ExternalApi} />                   
              <ProtectedRoute path='/dashboard' component={Dashboard} />
            </Switch>
            </div>
      </div>
    );
};



export default App;
