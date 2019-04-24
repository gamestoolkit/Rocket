import React, { Component } from 'react'
import AssetsContainer from '../containers/AssetsContainer';

class App extends Component {
  render() {
    return (
      <>
        <div id="main-container" className="container">
          <AssetsContainer  />
        </div>
      </>
    )
  }
}

export default App;
