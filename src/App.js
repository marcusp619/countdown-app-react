import React, { Component } from 'react';

/* es6 class setup for grabbing the methods from Component
** A component in react is a independant and reuseable piece of ui
** JSX is javascript that allows us to right components
** Importing and exporting is what allows us to share code to other components
*/
class App extends Component {
  // render method returns this to the view
  render() {
    return (
      <div>Countdown Champ, App Component</div>
    )
  }
}

export default App;
