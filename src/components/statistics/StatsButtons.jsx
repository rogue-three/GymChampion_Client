import React, { Component } from "react";
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

class StatsButtons extends Component {

// TODO I could put stats windows under this element ??!!???
    render() {
        return (
                    <List>
                        <Button variant="contained">General</Button>
                        <Button variant="contained">By Exercise</Button>
                        <Button variant="contained">By Body Part</Button>
                    </List>
        );
    }
}

export default StatsButtons;