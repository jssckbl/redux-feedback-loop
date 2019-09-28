import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

import axios from 'axios';
// import './Support.css';

class Support extends Component {
    render() {
        return (
            <div className="Support">
                <header>
                    <h2>Support Page</h2>
                </header>
                <br />
            </div>
            <div>
                <footer>
                    <Link to='/Review'>
                        <button className="reviewButton">Next Page is Review</button>
                    </Link>
                </footer>
            </div>
        );
    }
}

export default connect()(Support);