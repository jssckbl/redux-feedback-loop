import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';


import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import StartPage from '../StartPage/StartPage';
import Submission from '../Submission/Submission';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

class App extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FEEDBACK!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <Route path="/" exact component={StartPage} />
          <Route path="/feeling" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/submission" component={Submission} />
        </Router>
      </div>
    );
  }

}
export default App;
