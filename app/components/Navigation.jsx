var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to="/" activeClassName="ative-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://www.justin.gent" target="_blank">Justin Pettit</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

module.exports = Navigation;