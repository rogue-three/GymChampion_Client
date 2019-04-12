import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../../themes/MuiComponentTheme";
import TotalLoadForAllTrainings from "./TotalLoadForAllTrainings";


class StatsGeneral extends Component {

    // TODO How to bind variable in this ???
    constructor(props) {
        super(props);
        this.userName = "Mihu";
    }

    state = {
        getNumberOfTraininsURL:
            "http://localhost:8080/v1/statistics/training_days/Mihu",
        getTotalDurationOfAllTrainingsURL:
        "http://localhost:8080/v1/statistics/total_duration_of_all_trainings/Mihu"
    };


    componentDidMount() {
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
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <React.Fragment>
                    <div>
                        Number of trainings: {this.state.numbOfTrainings} sessions
                    </div>
                    <div>
                        <TotalLoadForAllTrainings />
                    </div>
                    <div>
                        Load duration of trainings: {this.state.totalDurationOfAllTrainings} min
                    </div>
                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default StatsGeneral;