import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class StatsGeneral extends Component {

    // TODO How to bind variable in this ???
    constructor(props) {
        super(props);
        this.state = {
            numbOfTrainings: 0,
            totalDurationOfAllTrainings: 0,
            getNumberOfTraininsURL:
                "http://localhost:8080/v1/statistics/training_days/" + this.props.activeUser,
            getTotalDurationOfAllTrainingsURL:
                "http://localhost:8080/v1/statistics/total_duration_of_all_trainings/" + this.props.activeUser}

    }

    componentDidMount() {
        console.log(this.state.getNumberOfTraininsURL)
        fetch(this.state.getNumberOfTraininsURL)
            .then(response=>response.json())
            .then(numbOfTrainings => {

                console.log(numbOfTrainings);
                this.setState({numbOfTrainings})
        }).then(        fetch(this.state.getTotalDurationOfAllTrainingsURL)
            .then(response=>response.json())
            .then(totalDurationOfAllTrainings => {

                console.log(totalDurationOfAllTrainings);
                this.setState({totalDurationOfAllTrainings})
            }))
    }

    render() {
        return (
                <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
            >
                    <Grid item>
                        <Typography> Number of trainings: {this.state.numbOfTrainings} sessions </Typography>
                    </Grid>

                    <Grid item>
                        <Typography>Load duration of trainings: {this.state.totalDurationOfAllTrainings} min </Typography>
                    </Grid>
                    <Grid item>
                        {/*<TotalLoadForAllTrainings />*/}
                    </Grid>
                </Grid>

        );
    }
}

export default StatsGeneral;