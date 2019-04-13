import React, { Component } from "react";
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

class StatsButtons extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                    <List>
                        {this.props.children}
                        <Button
                            variant="contained"
                            // onClick={() => this.props.getGeneral()}
                        >General</Button>
                        <Button
                            variant="contained"
                            // onClick={this.props.getByExercise}
                        >By Exercise</Button>
                        <Button
                            variant="contained"
                            // onClick={this.props.getByBodyPart}
                        >By Body Part</Button>
                    </List>
        );
    }
}

export default StatsButtons;