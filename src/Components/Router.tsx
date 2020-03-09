import React from 'react';
import {
  BrowserRouter as Router,
  Route,
//   Redirect,
//   Switch,
} from 'react-router-dom';

import Home from '../Routes/Home/HomeContainer';
import Input from '../Routes/Input/InputContainer';
import Visual from '../Routes/Visual/VisualContainer';
import Memory from '../Routes/Memory/MemoryContainer';

export default () => (
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/input" exact component={Input} />
      <Route path="/visual" exact component={Visual} />
      <Route path="/memory/:id" exact component={Memory} />
    </>
  </Router>
);
