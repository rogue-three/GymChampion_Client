import React, { Component } from "react";

import MainView from "./MainView";
import Profile from "./../profile/Profile";

class Navbar extends Component {
  state = {
    actualLabel: 1
  };

  setActualLabel = active => {
    this.setState({ actualLabel: active });
  };

  runProfile = () => {
    this.setActualLabel(1);
  };

  runCalendar = () => {
    this.setActualLabel(2);
  };

  runTrain = () => {
    this.setActualLabel(3);
  };

  runStats = () => {
    this.setActualLabel(4);
  };

  runDiagnostic = () => {
    this.setActualLabel(5);
  };

  labelStyleActual = {
    color: "black",
    fontSize: 20
  };

  labelStyle = {
    color: "white",
    fontSize: 15
  };

  renderBarByActive = numberOfLabel => {
    switch (numberOfLabel) {
      case 1: {
        if (numberOfLabel === this.state.actualLabel) {
          return <label style={this.labelStyleActual}>Profile</label>;
        } else return <label style={this.labelStyle}>Profile</label>;
      }
      case 2: {
        if (numberOfLabel === this.state.actualLabel) {
          return <label style={this.labelStyleActual}>Calendar</label>;
        } else return <label style={this.labelStyle}>Calendar</label>;
      }
      case 3: {
        if (numberOfLabel === this.state.actualLabel) {
          return <label style={this.labelStyleActual}>Train</label>;
        } else return <label style={this.labelStyle}>Train</label>;
      }
      case 4: {
        if (numberOfLabel === this.state.actualLabel) {
          return <label style={this.labelStyleActual}>Stats</label>;
        } else return <label style={this.labelStyle}>Stats</label>;
      }
      case 5: {
        if (numberOfLabel === this.state.actualLabel) {
          return <label style={this.labelStyleActual}>Diagnostic</label>;
        } else return <label style={this.labelStyle}>Diagnostic</label>;
      }
      default: {
      }
    }
  };

  renderActiveScreen = () => {
    if (this.state.actualLabel === 1) {
      return <Profile />;
    } else if (this.state.actualLabel === 2) {
      return <h1>Calendar</h1>;
    } else if (this.state.actualLabel === 3) {
      return <MainView />;
    } else if (this.state.actualLabel === 4) {
      return <h1>Stats</h1>;
    } else if (this.state.actualLabel === 5) {
      return <h1>Diagnostic</h1>;
    }
  }

    styleList = {
        display:"flex",
        color:"green",
        marginTop:"0%",
        height:"100%",
        margin:"0%"
        
        
    }

    navbarStyle = {
        width:"100%",
        backgroundColor:"#009688",
        height:100,
        margin:"0%",
        border:"ridge",
        borderColor:"#80cbc4"
        
    }

    styleListItems = {
        
        width:"20%",
        color:"green",
        height:"100%",
        margin:"0%"
    }

    // getList(){
    //     let list = "";
    //     array.forEach(element => {
    //         list += (<Component active={element.active}/>)
    //     });
    // }

    render() {
        return (
            <span>
            {this.renderActiveScreen()}
            <div style={this.navbarStyle}>
                <ul style={this.styleList}>
                    {/* {this.getList()} */}

                    <li style={this.styleListItems}>
                        <button onClick={this.runProfile} style={this.navbarStyle}>{this.renderBarByActive(1)}</button>
                    </li>
                    <li style={this.styleListItems}>
                        <button onClick={this.runCalendar} style={this.navbarStyle}>{this.renderBarByActive(2)}</button>
                    </li>
                    <li style={this.styleListItems}>
                        <button onClick={this.runTrain} style={this.navbarStyle}>{this.renderBarByActive(3)}</button>
                    </li>
                    <li style={this.styleListItems}>
                        <button onClick={this.runStats} style={this.navbarStyle}>{this.renderBarByActive(4)}</button>
                    </li>
                    <li style={this.styleListItems}>
                        <button onClick={this.runDiagnostic} style={this.navbarStyle}>{this.renderBarByActive(5)}</button>
                    </li>
                </ul>
            </div>
            </span>
        )
    }

    
  }





export default Navbar;
