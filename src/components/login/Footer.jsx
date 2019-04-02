import React, { Component } from "react";

class Footer extends Component {

footerStyles = {
    width:"100%",
    backgroundColor:"DarkTurquoise ",
    color: "white"
 
}

contactStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
}

copyrightStyles = {
    marginLeft:"40%"
}

    render() {
       return (
        <div style={this.footerStyles}>
           
            <div style={this.contactStyles}>
                <a href="/mihu">Mihu LinkedId</a>
                <br/>
                <a href="/krzychu1">Krzychu1 LinkedId</a>
                <br/>
                <a href="/krzychu2">Krzychu2 LinkedId</a>
            </div>
            <br/>
            <p style={this.copyrightStyles}>COPYRIGHT BY ROGUE-THREE 2019</p>
            <br/>
            <br/>
        </div>
       );
    }
}

export default Footer;