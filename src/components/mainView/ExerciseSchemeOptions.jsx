import React, { Component } from "react";

class ExerciseSchemeOptions extends Component {
    
    render() {
        return (
            <React.Fragment>
                 <h1>{this.props.location.schemeName}</h1>
            </React.Fragment>
        )
    }
}
/// ExerciseScheme options to implement.
////Now this component render only passed data from link because
// ExerciseSchemeOptions must know which ExerciseScheme will be handling
export default ExerciseSchemeOptions;