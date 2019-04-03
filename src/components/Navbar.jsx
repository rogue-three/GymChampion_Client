import React, { Component } from "react";

class Navbar extends Component {

    state = {
       actualLabel:2
    }

    setActiveBar = (active) => {
        this.setState({activeBar: active});
    }

    runProfile = () => {
        this.setActiveBar(1);

    }


    labelStyleActual = {
        color:"black",
        fontSize:40
    }

    labelStyle = {
        color: "white",
        fontSize:20
    }

    renderBarByActive = (numberOfLabel) => {
         switch(numberOfLabel) {
             case(1): {
                if(numberOfLabel === this.state.actualLabel) {
                    return <label style={this.labelStyleActual}>Profile</label>
                } else return <label style={this.labelStyle}>Profile</label>
             }
             case(2):{
                if(numberOfLabel === this.state.actualLabel) {
                    return <label style={this.labelStyleActual}>Calendar</label>
                } else return <label style={this.labelStyle}>Calendar</label>
             }
             case(3):{
                if(numberOfLabel === this.state.actualLabel) {
                    return <label style={this.labelStyleActual}>Train</label>
                } else return <label style={this.labelStyle}>Train</label>
             }
             case(4):{
                if(numberOfLabel === this.state.actualLabel) {
                    return <label style={this.labelStyleActual}>Stats</label>
                } else return <label style={this.labelStyle}>Stats</label>
             }
             case(5):{
                if(numberOfLabel === this.state.actualLabel) {
                    return <label style={this.labelStyleActual}>Diagnostic</label>
                } else return <label style={this.labelStyle}>Diagnostic</label>
             }


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
        backgroundColor:"DarkTurquoise",
        height:150,
        margin:"0%"
    }

    styleListItems = {
        width:"20%",
        color:"green",
        height:"100%",
        margin:"0%"
    }

    render() {
        return (
            <span>
            <div style={this.navbarStyle}>
                <ul style={this.styleList}>
                    <li style={this.styleListItems}>
                        <button style={this.navbarStyle}>{this.renderBarByActive(1)}</button>
                    </li>
                    <li style={this.styleListItems}>
                        <button style={this.navbarStyle}>{this.renderBarByActive(2)}</button>
                    </li>
                    <li style={this.styleListItems}>
                        <button style={this.navbarStyle}>{this.renderBarByActive(3)}</button>
                    </li>
                    <li style={this.styleListItems}>
                        <button style={this.navbarStyle}>{this.renderBarByActive(4)}</button>
                    </li>
                    <li style={this.styleListItems}>
                        <button style={this.navbarStyle}>{this.renderBarByActive(5)}</button>
                    </li>
                </ul>
            </div>
            </span>
        )
    }
}
export default Navbar;