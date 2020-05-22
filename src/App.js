import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import HomeDetailed from './components/HomeDetailed';

function App ( ) {

  return (
    <div>
        <Switch >
          <Route exact path='/' component={Home}/>
          <Route path='/country/:id' component={HomeDetailed} />
        </Switch>
    </div>
  );
}

export default App;
