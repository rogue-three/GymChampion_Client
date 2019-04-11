import React, { Component } from "react";

class Training extends Component {

    render() {
        return(
            <React.Fragment>
                <h1>{this.props.location.schemeName}</h1>
            </React.Fragment>    
        );
    }
}
/// Training to implement (Krzychu J)
////Now this component render only passed data from link because
// Training must know which ExerciseScheme will be handling
export default Training;