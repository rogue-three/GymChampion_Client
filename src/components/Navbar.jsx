import React, { Component } from "react";

class Navbar extends Component {

    
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

    actualLabelStyle = {
        color:"black",
        fontSize:40
    }

    labelStyle = {
        color: "white",
        fontSize:20
    }

    render() {
        return (
            <span>
            <div style={this.navbarStyle}>
                <ul style={this.styleList}>
                    <li style={this.styleListItems}>
                    <button style={this.navbarStyle}><label style={this.labelStyle}>Profile</label></button>
                    </li>
                    <li style={this.styleListItems}>
                    <button style={this.navbarStyle}><label style={this.labelStyle}>Calendar</label></button></li>
                    <li style={this.styleListItems}>
                    <button style={this.navbarStyle}><label style={this.actualLabelStyle}>Train</label></button></li>
                    <li style={this.styleListItems}>
                    <button style={this.navbarStyle}><label style={this.labelStyle}>Stats</label></button></li>
                    <li style={this.styleListItems}>
                    <button style={this.navbarStyle}><label style={this.labelStyle}>Diagnostic</label></button></li>
                </ul>
            </div>
            </span>
        )
    }
}
export default Navbar;