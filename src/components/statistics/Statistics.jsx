import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../themes/MuiComponentTheme";
import StatsButtons from "./StatsButtons";
import StatsWindow from "./StatsWindow";


class Statistics extends Component {
    state = {
        userLogin: "Mihu"
    };

    handleGenStatsButton(){};
    handleByExerciseStatsButton(){};
    handleByBodyPartStatsButton(){};

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <div>
                    <StatsButtons />
                    <StatsWindow />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Statistics;
