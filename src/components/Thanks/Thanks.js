import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Thanks extends Component {


render() {
    return (
        <header>
            <h1>Thank you for your Feedback!</h1>
        </header>
        <body>
            <Link to='/startPage'>
                <button className="startPageButton">Leave New Feedback</button>
            </Link>
        </body>
    )
}
}
export default connect()(Thanks);