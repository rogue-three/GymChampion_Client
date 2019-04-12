import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../themes/MuiComponentTheme";
import StatsGeneral from "./generalStats/StatsGeneral";
import StatByExercise from "./StatByExercise";

class StatsWindow extends Component {

// TODO Split Stats General - StatsByExercise - StatsByBodyPart to separate views.

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <React.Fragment>
                    <StatsGeneral />
                </React.Fragment>
                <React.Fragment>
                    <div> .</div>
                    <StatByExercise />
                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default StatsWindow;