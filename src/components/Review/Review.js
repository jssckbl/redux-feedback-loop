import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

import axios from 'axios';
// import './Support.css';

class Review extends Component {
    render() {
        return (
            <div className="Review">
                <header>
                    <h2>Review Page</h2>
                </header>
                <br />
            </div>
            <div>
                <footer>
                    <Link to='/Comments'>
                        <button className="commentsButton">Next Page is Comments</button>
                    </Link>
                </footer>
            </div>
        );
    }
}

export default connect()(Review);