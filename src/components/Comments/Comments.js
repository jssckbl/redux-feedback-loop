import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import classes from '*.module.scss';
// import './Comments.css';

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

class Comments extends Component {

    state = {
        comments: ''
    }

    handleChange = (event) => {
        this.setState({
            comments:

                event.target.value

        });
    }
    handleSubmit = (event) => {
        // event.preventDefault();
        this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments })
        console.log(this.state.comments)
        this.setState({
            comments: ''
        })
    }


    render() {
        const { classes } = this.props;
        return (
         <>
        <header>
            <h1>Is there anything else you'd like us to know?</h1>
        <h3>Include any additional comments below.
        </h3>
        </header>

            <body>
                <form>
                <TextField
                    id="standard-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                />
                <button onClick={(event) => this.handleSubmit()}
                    type="button">Submit Answer</button>
                <Link to='/review'>
                    <button className="commentsButton">Review Feedback</button>
                </Link>
                </form>
          

            </body>
</>
        );
    }
}

export default withStyles(styles)(connect()(Comments));