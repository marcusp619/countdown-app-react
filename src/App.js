import React, { Component } from 'react';
import './App.css';

/* es6 class setup for grabbing the methods from Component
** A component in react is a independant and reuseable piece of ui
** JSX is javascript that allows us to right components
** Importing and exporting is what allows us to share code to other components
*/
class App extends Component {
  constructor(props) {
    super(props)
    // data that is important to the information
    this.state = {
      deadline: 'December 25, 2017'
    }
  }

  changeDeadline() {
    // never mutate state directly
    this.setState({deadline: 'November 25, 2017'})
  }
  // render method returns this to the view
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder='new date'/>
          <button onClick={() => this.changeDeadline()}>
            Sumbut
          </button>
        </div>
      </div>
    )
  }
}

export default App;
