import React  from 'react';
import './css/App.css';
import {
  Route,
  Switch
} from 'react-router-dom';
import Dashboard from './components/dashboard'; 
import { NavBar, Loading } from "./components";
import { Home, Profile, ExternalApi } from "./views"; 
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { useAuth0 } from '@auth0/auth0-react';



function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
  return <Loading />;

}

    return (
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <div className="conatiner flex-grow-1">
              <Switch> 
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/external-api" component={ExternalApi} />                  
              </Switch>    
              <Switch>  
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
            </div>
            <Footer />
      </div>
    );
};



export default App;
