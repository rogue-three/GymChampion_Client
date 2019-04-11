import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../themes/MuiComponentTheme";


class Diagnostics extends Component {
    state = {
        userLogin: "Mihu",
        getmaxChest:
            "http://localhost:8080/v1/diagnostics/1rmax_expected/1/login/Mihu",
        getBestEffortChest:
        "http://localhost:8080/v1/statistics/max_weight_pulled/1/login/Mihu"

    };

    componentDidMount() {
        fetch(this.state.getmaxChest)
            .then(response=>response.json())
            .then(maxChest => {
                this.setState({maxChest})
            })
            .then(        fetch(this.state.getBestEffortChest)
            .then(response=>response.json())
            .then(maxChesteffort => {
                this.setState({maxChesteffort})
            }))
    }

// TODO h2 will be changed to get name of exercise dynamically from route
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />

                <h2>Barbell Bench Press diagnostics:</h2>
                <div>
                    Your heaviest weight up to now was: {this.state.maxChesteffort}
                    
                </div>
                <div>
                    Your expected 1 Repetition Maximum is: {this.state.maxChest} kg
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Diagnostics;
