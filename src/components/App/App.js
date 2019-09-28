import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';


import axios from 'axios';
import './App.css';


class App extends Component {


// componentDidMount(){

// }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        {/* List Router and Routes here */}
        
      </div>
    );
  }
}

export default connect()(App);
