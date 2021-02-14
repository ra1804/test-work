import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemPost from './pages/ItemPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/post/:id">
            <ItemPost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
