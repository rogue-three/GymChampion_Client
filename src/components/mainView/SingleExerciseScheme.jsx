import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

class SingleExerciseScheme extends Component {

    render() {
        return (
            <React.Fragment>
                <Grid container style={{backgroundColor:'#80cbc4'}} direction="row" alignItems="center" justify="space-around" >
                    <Button>
                        <Typography style={{color:"white"}} variant="h6" gutterBottom>
                        {this.props.schemeName + "  TRAINING"}
                        </Typography>
                    </Button>
                    <Fab size='small' color="primary" aria-label="Edit">
                        <Icon>more_horiz</Icon>
                    </Fab>
                </Grid>
                <br/>
                <br/>
            </React.Fragment>
        );
    }
}
export default SingleExerciseScheme;