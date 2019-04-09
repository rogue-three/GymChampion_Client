import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../themes/MuiComponentTheme";
import StatsGeneral from "./StatsGeneral";

class StatsWindow extends Component {


    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <React.Fragment>
                    <StatsGeneral />
                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default StatsWindow;