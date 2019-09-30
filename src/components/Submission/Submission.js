import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Link } from 'react-router-dom';

// import axios from 'axios';
// import './Support.css';

class Submission extends Component {
    // to go back to landing page
    nextPage = () => { this.props.history.push('/')
    // will clear the inputs when resetting form
    this.props.dispatch({ type: 'SET_FEELING', payload: '' });
    this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: '' });
    this.props.dispatch({ type: 'SET_SUPPORT', payload: '' });
    this.props.dispatch({ type: 'SET_COMMENTS', payload: '' });
}

    render() {
        return <>
            <div className="Submission">
                <header>
                    <h2>Submission Page</h2>
                </header>
                <br />
            </div>
            <div>

                <p>Thank you!</p>
                <button onClick = {(event) => this.nextPage()} type="submit">Leave New Feedback</button>
                {/* <footer>
                    {/* <Link to='/Review'>
                        <button className="reviewButton">Next Page is Review</button>
                    </Link> 
                </footer> */}
            </div>
            </>
        
    };
}
    const mapReduxStoreToProps = (reduxStore) => ({
        reduxStore
    });


export default connect(mapReduxStoreToProps)(Submission);