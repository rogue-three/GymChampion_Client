import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../themes/MuiComponentTheme";


class StatsGeneral extends Component {

    state = {
        getNumberOfTraininsURL:
            "http://localhost:8080/v1/statistics/training_days/Mihu",
        getTotalLoaURL:
        "http://localhost:8080/v1/statistics/get_total_load_by_user/Mihu",
        result: null
    };


    componentDidMount() {
        fetch(this.state.getNumberOfTraininsURL)
            .then(response=>response.json())
            .then(result => {

                console.log(result);
                this.setState({result})
        }).then(        fetch(this.state.getTotalLoaURL)
            .then(response=>response.json())
            .then(result2 => {

                console.log(result2);
                this.setState({result2})
            }))
    }


    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <React.Fragment>
                    <div>
                        Number of trainings: {this.state.result}
                    </div>
                    <div>
                        Load total: {this.state.result2}
                    </div>
                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default StatsGeneral;