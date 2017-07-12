import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router-dom';
// var Router = ReactRouter.BrowserRouter;
// var Route = ReactRouter.Route;

import App from './components/app';
class SetUp extends React.Component {
  render() {
    // <Router>
    <div>
      // <Route path="/blogs" component={App} />
      <App />
    </div>
    // </Router>
  }
}

ReactDOM.render(
  <SetUp />, document.getElementById('container'));
