import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Review from '../Review/Review';
import axios from 'axios';

// import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


// import './Feeling.css';
const styles = theme => ({

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    myCustomerForm: {
        width: '80%',
        margin: 'auto'
    }
});

class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleChange = ( event) => {
        this.setState ({
            feeling: 
            
            event.target.value
            
        });
    }
// Take input and route to Understanding page
    handleSubmit = (event) => {
        // event.preventDefault();
        this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feeling })
        console.log(this.state.feeling)
        this.setState({
            feeling: ''
        })
    }
    
    render () {
        const { classes } = this.props;

        return (
            <>
                <header>
                    <h1>How are you feeling today?</h1>
                </header>
                <body>
                <form>

                <h3>Please choose an option below that best describes
                    how you feel.
                </h3>
                <select value={this.state.feelings} onChange={(event) => 
                this.handleChange(event)}>
                    <option value="1">1: I'm feeling very stressed.</option>
                    <option value="2">2: I'm feeling stressed.</option>
                    <option value="3">3: I'm feeling OK.</option>
                    <option value="4">4: I'm feeling good.</option>
                    <option value="5">5: I've got this.</option>
                </select>
                    <button onClick={(event) => this.handleSubmit()}
                    type="button">Submit Answer</button>

                    <Link to='/understanding'>
                        <button className="understandingButton">Next Question</button>
                    </Link>
            </form>
            </body>
            </>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})


// export default connect(mapReduxStoreToProps)(Feeling);

export default connect()(Feeling);