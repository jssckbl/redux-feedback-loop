import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';


import axios from 'axios';
// import './Feeling.css';

class Feeling extends Component {
    render() {
        return (
            <div className="Feeling">
                <header>
                    <h2>Feeling Page</h2>
                </header>
                <br />
            </div>
            <div>
                <footer>
                    <Link to='/Understanding'>
                        <button className="understandingButton">Next Page is Understanding</button>
                    </Link>
                </footer>
            </div>
        );
    }
}

export default connect()(Feeling);