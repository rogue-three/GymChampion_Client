import React, { Component } from "react";
import StatsGeneral from "./generalStats/StatsGeneral";

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