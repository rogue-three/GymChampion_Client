import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import TrainIcon from '@material-ui/icons/FitnessCenter';
import StatsIcon from '@material-ui/icons/Equalizer';
import DiagnosticIcon from '@material-ui/icons/RemoveRedEye';

class Navigation extends Component {
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <Grid container spacing={0} alignItems="center" justify="center" direction="row">
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="PROFILE" icon={<ProfileIcon/>} component={Link} to="/profile" />
        <BottomNavigationAction label="CALENDAR" icon={<CalendarIcon/>} component={Link} to="/calendar"/>
        <BottomNavigationAction label="TRAIN" icon={<TrainIcon/> } component={Link} to="/"/>
        <BottomNavigationAction label="STATISTIC" icon={<StatsIcon/>} component={Link} to="/statistic"/>
        <BottomNavigationAction label="DIAGNOSTIC" icon={<DiagnosticIcon/>} component={Link} to="/diagnostic"/>
      </BottomNavigation>
      </Grid>
    );
  }
}

export default Navigation;