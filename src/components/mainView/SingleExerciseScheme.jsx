import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class SingleExerciseScheme extends Component {

    render() {
        return (
            <Grid>
                <Typography>{this.props.schemeName}</Typography>
            </Grid>
        );
    }
}
export default SingleExerciseScheme;