import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import App from './components/app';

class SetUp extends React.Component {
  render() {
    return(
    <div>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </div>
  )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <SetUp />
  </BrowserRouter>
  , document.getElementById('container'));
