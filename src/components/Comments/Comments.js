import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';


import axios from 'axios';
// import './Comments.css';

class Comments extends Component {
    render() {
        return (
            <div className="Comments">
                <header>
                    <h2>Comments Page</h2>
                </header>
                <br />
            </div>
        );
    }
}

export default connect()(Comments);