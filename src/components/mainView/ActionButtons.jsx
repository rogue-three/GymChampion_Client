import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class ActionButtons extends Component {

    render() {
        return(
        <Grid container justify="space-between"  alignItems="stretch" direction="column" >
           <br></br>
            <br></br>
             <Button variant="contained" color="secondary" component={Link} to="/quicktrain" >
                JUST START TRAINING NOW!
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="contained" color="primary" component={Link} to="/customtrain">
                CUSTOM TRAINING PLANS
            </Button>
        </Grid>
        );
    }
}
export default ActionButtons;