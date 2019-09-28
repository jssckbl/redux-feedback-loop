import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';


import axios from 'axios';
// import './Understanding.css';

class Understanding extends Component {
    render() {
        return (
            <div className="Understanding">
                <header>
                    <h2>Understanding Page</h2>
                </header>
                <br />
            </div>
            <div>
                <footer>
                    <Link to='/Support'>
                        <button className="supportButton">Next Page is Support</button>
                    </Link>
                </footer>
            </div>
        );
    }
}

export default connect()(Understanding);