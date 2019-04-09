import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class TrackWorkout extends Component {

    render() {
        return (
            
            <Grid container style={{backgroundColor: '#004d40'}}   justify="space-evenly" 
            alignItems="center">
                 <Typography style={{color:'white'}} component="h2" variant="headline" gutterBottom>
                    TRACK WORKOUT: 
                 </Typography>
                 <Button variant="contained" color="primary" component={Link} to="/trackedit">
                        Edit
                </Button>
            </Grid>
        );
    }
}
export default TrackWorkout;