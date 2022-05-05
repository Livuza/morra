import React from 'react';

const exports = {};

exports.GetFingers = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <form onSubmit={() => parent.playHand(this.state.fingers,this.state.guess)}>
        <label>
          <div>{(hand == 1) ? 'It was a draw, pick again.' : ''}</div>
          <br />
          {!playable ? 'Please wait...' : ''}
          <br/>
          Fingers:
          <input type="text" value={this.state.fingers} />
          <br />
          Guess:
          <input type="text" value={this.state.guess} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
