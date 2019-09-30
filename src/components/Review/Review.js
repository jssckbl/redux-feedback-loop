import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Link } from 'react-router-dom';

import axios from 'axios';
// import './Support.css';

class Review extends Component {

    state = {
        feeling: this.props.reduxStore.feelingReducer,
        understanding: this.props.reduxStore.understandingReducer,
        support: this.props.reduxStore.supportReducer,
        comments: this.props.reduxStore.commentsReducer
    }

    nextPage = (event) =>{
        axios.post('/feedback', this.state)
        .then(response => {
            alert('Thank you for your feedback!')
            this.props.dispatch({type: 'RESET'});

        }).catch(error => {
            alert('Could not submit feedback. Please try again.', error)
        })

        this.props.history.push('/submission')
    }
    
    render() {
        return (
            <>
            <div className="Review">
                <header>
                    <h2>Review Your Feedback</h2>
                </header>
                <br />
            </div>
            <div>
                <h2>Feeling: {this.props.reduxStore.feelingReducer}</h2>
                <h2>Understanding: {this.props.reduxStore.understandingReducer}</h2>
                <h2>Support: {this.props.reduxStore.supportReducer}</h2>
                <h2>Comments: {this.props.reduxStore.commentsReducer}</h2>
                <button onClick={(event) => this.nextPage(event)} type="button">INCOMPLETE</button>
            </div>

            <button className="commentsButton">Submit Feedback</button>

            </>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore
})


export default connect(mapReduxStoreToProps)(Review);
