import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../themes/MuiComponentTheme";
import StatsGeneral from "./generalStats/StatsGeneral";
import StatByExercise from "./StatByExercise";

class StatsWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeUser: this.props.activeUser
        }
    }
// TODO Split Stats General - StatsByExercise - StatsByBodyPart to separate views.

    render() {
        const { activeUser } = this.state;
        return (
            <React.Fragment>

                    <StatsGeneral
                    activeUser = {activeUser}/>

            </React.Fragment>
        );
    }
}

export default StatsWindow;