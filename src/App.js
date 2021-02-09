import React  from 'react';
import './css/App.css';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom';
import Login from './components/login.js'; 
import Register from './components/register.js';  
import Dashboard from './components/dashboard.js';  
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";


 

function App() {
    return (
      <Router>
      <Auth0ProviderWithHistory>
            <div className="container">    
              <nav className="navbar navbar-expand-lg navheader">    
                <div className="collapse navbar-collapse" >    
                  <ul className="navbar-nav mr-auto">    
                    <li className="nav-item">    
                      <Link to={'/login'} className="nav-link">Login</Link>    
                    </li>    
                    <li className="nav-item">    
                      <Link to={'/register'} className="nav-link">Register</Link>    
                    </li>    
                  </ul>    
                </div>    
                </nav>
              </div>
              <Switch>    
                <Route exact path='/login' component={Login} />    
                <Route path='/register' component={Register} />    
              </Switch>    
              <Switch>  
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
      </Auth0ProviderWithHistory>
      </Router>
    )
}



export default App;
