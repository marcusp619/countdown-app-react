import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.jsx'

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
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    // never mutate state directly
    this.setState({deadline: this.state.newDeadline});
  }
  // render method returns this to the view
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}
        </div>
        <Clock />
        <div>
          <input
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <button onClick={() => this.changeDeadline()}>
            Sumbut
          </button>
        </div>
      </div>
    )
  }
}

export default App;
