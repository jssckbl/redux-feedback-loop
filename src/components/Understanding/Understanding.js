import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

import axios from 'axios';
// import './Understanding.css';
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

class Understanding extends Component {

    state = {
        understanding: ''
    }

    handleChange = (event) => {
        this.setState({
            understanding:

                event.target.value

        });
    }
    // Take input and route to Understanding page
    handleSubmit = (event) => {
        // event.preventDefault();
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding })
        console.log(this.state.understanding)
        this.setState({
            understanding: ''
        })
    }


    render() {
        const { classes } = this.props;

        return (
            <>
                <header>
                    <h1>How well are you understanding the content?</h1>
                </header>
                <body>
                    <form>

                        <h3>Please choose an option below that best describes
                            how well you understand the content.
                </h3>
                        <select value={this.state.understanding} onChange={(event) =>
                            this.handleChange(event)}>
                            <option value="1">1: I'm totally lost.</option>
                            <option value="2">2: I'm kind of lost.</option>
                            <option value="3">3: I'm feeling OK.</option>
                            <option value="4">4: I'm feeling good.</option>
                            <option value="5">5: I've got this.</option>
                        </select>
                        <button onClick={(event) => this.handleSubmit()}
                            type="button">Submit Answer</button>

                        <Link to='/support'>
                            <button className="supportButton">Next Question</button>
                        </Link>
                    </form>
                </body>
            </>
        );
    }
}

export default connect()(Understanding);