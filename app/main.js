// styles
// require('./../node_modules/bootstrap/dist/css/bootstrap.min.css');

// react libraries
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

// components
import Hello from './components/Hello.jsx';
import About from './components/About.jsx';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>William Youmans</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/hello">Hello</Link></li>
        </ul>
        <div className="main-content">{this.props.children}</div>
      </div>
    )
  }
})

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="hello" component={Hello} />
    </Route>
  </Router>
), document.getElementById('app'))
