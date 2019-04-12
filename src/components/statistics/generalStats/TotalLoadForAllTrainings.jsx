import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../../themes/MuiComponentTheme";


class TotalLoadForAllTrainings extends Component {

    state = {
        getTotalLoadForAllTrainingsURL:
            "http://localhost:8080/v1/statistics/get_total_load_by_user/Mihu"
    };

    componentDidMount() {
        fetch(this.getTotalLoadForAllTrainingsURL)
            .then(response=>response.json())
            .then(totalLoadForAllTrainings => {
                this.setState({totalLoadForAllTrainings})
            })
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <React.Fragment>
                    <div>
                        Total load for all trainings was: {this.state.totalLoadForAllTrainings} kg
                    </div>
                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default TotalLoadForAllTrainings;