import React, { Component } from 'react';
import { connect } from 'react-redux';

class StartPage extends Component {
    nextPage = () => 
        {this.props.history.push('/feeling')}


        render () {
            return (
                <>
                <div>
                    <h1>Start Page</h1>
                    <h2>Please complete Feedback</h2>
                    <h3>Click "Start Feedback" to get started!</h3>
                    <button onClick={(event) => 
                        this.nextPage()}type="button">Start Feedback</button>
                </div>
                </>
            )
        }
    }

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(StartPage);