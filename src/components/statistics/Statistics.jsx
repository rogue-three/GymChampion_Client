import React, { Component } from "react";
import StatsButtons from "./StatsButtons";
import StatsWindow from "./StatsWindow";
import StatsGeneral from "./generalStats/StatsGeneral";

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: this.props.activeUser,
            statsGeneral: StatsGeneral,
            activeStatsWindow: 1
        }
    }

    handleGeneralStatsWindowButton =() =>{
    };
    handleByExerciseStatsButton(){};
    handleByBodyPartStatsButton(){};

    render() {
        return (
                <React.Fragment>
                    <StatsButtons
                        // getGeneral={this.handleGeneralStatsWindowButton()}
                        // getByExercise={this.handleByExerciseStatsButton()}
                        // getByBodyPart={this.handleByBodyPartStatsButton()}
                    />
                    <StatsWindow
                    activeUser = {this.state.activeUser}
                    activeStatsWindow = {this.state.activeStatsWindow}
                    />
                </React.Fragment>
        );
    }
}

export default Statistics;
