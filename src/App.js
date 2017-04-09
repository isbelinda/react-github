import React, { Component } from 'react';

import Header from './components/header.react';
import Dashboard from './pages/dashboard.react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
