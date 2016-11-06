
var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    // check if component change is in the 'countdownStatus'
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      // check to see if "countdownStatus: 'started'"
      switch (this.state.countdownStatus) {
        // when status is 'started', call 'startTimer'
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval (() => {
      var newCount = this.state.count -1;
      this.setState({
        // stop count at 0
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  render: function () {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
