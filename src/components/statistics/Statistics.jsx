import React, { Component } from "react";
import StatsButtons from "./StatsButtons";
import StatsWindow from "./StatsWindow";
import StatsGeneral from "./generalStats/StatsGeneral";

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: this.props.activeUser,
            statsGeneral: StatsGeneral
        }
    }

    handleGenStatsButton(){};
    handleByExerciseStatsButton(){};
    handleByBodyPartStatsButton(){};

    render() {
        return (
                <React.Fragment>
                    <StatsButtons />
                    <StatsWindow
                    activeUser = {this.state.activeUser}/>
                </React.Fragment>
        );
    }
}

export default Statistics;
