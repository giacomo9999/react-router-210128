import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import UsersPage from "./UsersPage";
import SearchPage from "./SearchPage";
import NoMatchPage from "./NoMatchPage";

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route path="/users" component={UsersPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  );
}

export default App;
