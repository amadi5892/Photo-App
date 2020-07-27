import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import People from './components/People';
import Home from './components/Home';
import Profile from './components/Profile';
import Bookmark from './components/Bookmark';
import './App.css';








function App() {
  return (
      <div className="App">
        <Router>
          <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link to="/home" className="nav-link" >Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/profile" className="nav-link" >Profile</Link>
                </li>
                <li class="nav-item">
                <Link to="/bookmark" className="nav-link" >Bookmarked</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </nav>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/bookmark">
                <Bookmark />
                </Route>
              <Route path="/home">
                <Home />
                </Route>
              <Route path="/profile">
                <Profile />
                </Route>
            </Switch>
          </div>
        </Router>
      </div>
    
  );
}

export default App;
