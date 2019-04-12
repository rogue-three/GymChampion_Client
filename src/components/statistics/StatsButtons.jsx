import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../themes/MuiComponentTheme";


class StatsButtons extends Component {

// TODO I could put stats windows under this element ??!!???
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                    <ul>
                        <button>General</button>
                        <button>By Exercise</button>
                        <button>By Body Part</button>
                    </ul>

            </MuiThemeProvider>
        );
    }
}

export default StatsButtons;