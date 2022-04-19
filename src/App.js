import logo from './logo.svg';
import './App.css';
import ClockForSure from './clockComponent';
import React, { Component } from 'react';

class App extends Component {
  state = {
    clockDateTime: 'init date time',
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            <ClockForSure datetime={this.state.clockDateTime}/>
          </h3>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  componentDidMount() {
    this.settime = setInterval((t) => {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;
        console.log(dateTime);
        this.setState((currentstate) => {

            clockDateTime: dateTime

        });
        return dateTime;
    }
        , 1000);
}
}

export default App;
