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
          {/* Limitado as props defaults do React DOM passa */}
          <Route exact path='/' component={Home}/>
          {/* Passa as props + qualquer outra prop que desejar */}
          <Route path='/country/:id' render={props =>  <HomeDetailed {...props}/> } />
        </Switch>
    </div>
  );
}

export default App;
