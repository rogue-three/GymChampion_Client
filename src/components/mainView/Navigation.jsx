import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import TrainIcon from '@material-ui/icons/FitnessCenter';
import StatsIcon from '@material-ui/icons/Equalizer';
import DiagnosticIcon from '@material-ui/icons/RemoveRedEye';

const styles = {
  root: {
    
  },
};

class Navigation extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="PROFILE" icon={<ProfileIcon/>} />
        <BottomNavigationAction label="CALENDAR" icon={<CalendarIcon/>} />
        <BottomNavigationAction label="TRAIN" icon={<TrainIcon/>} />
        <BottomNavigationAction label="STATISTIC" icon={<StatsIcon/>} />
        <BottomNavigationAction label="DIAGNOSTIC" icon={<DiagnosticIcon/>} />
      </BottomNavigation>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);