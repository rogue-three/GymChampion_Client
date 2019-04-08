import React, { Component } from "react"; 
import gym1 from "../../img/gym1.png";
import Grid from '@material-ui/core/Grid';


class Logo extends Component {


    render() {
        return (
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <img src={gym1} alt="logo" height="212" width="347" />
            </Grid>
        );
    }
}

export default Logo;