import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

import axios from 'axios';
// import './Support.css';

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

class Support extends Component {
    state = {
        support: ''
    }

    handleChange = (event) => {
        this.setState({
            support:

                event.target.value

        });
    }
    handleSubmit = (event) => {
        // event.preventDefault();
        this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.support })
        console.log(this.state.support)
        this.setState({
            support: ''
        })
    }


    render() {
        const { classes } = this.props;

        return (
            <>
                <header>
                    <h1>Did you feel supported by Prime staff today?</h1>
                </header>
                <body>
                    <form>

                        <h3>Please choose an option below that best describes
                            how supported you feel by Prime staff.
                </h3>
                        <select value={this.state.support} onChange={(event) =>
                            this.handleChange(event)}>
                            <option value="1">1: I feel abandoned.</option>
                            <option value="2">2: I'm feeling lost.</option>
                            <option value="3">3: I'm feeling OK.</option>
                            <option value="4">4: I'm feeling good.</option>
                            <option value="5">5: I feel supported.</option>
                        </select>
                        <button onClick={(event) => this.handleSubmit()}
                            type="button">Submit Answer</button>

                        <Link to='/comments'>
                            <button className="commentsButton">Next Question</button>
                        </Link>
                    </form>
                </body>
            </>
        );
    }
}

export default connect()(Support);