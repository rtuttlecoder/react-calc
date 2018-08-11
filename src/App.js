import React, { Component } from 'react';
import Calendar from './compnents/Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>react<b>Calendar</b></span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
