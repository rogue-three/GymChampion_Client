import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../themes/MuiComponentTheme";


class StatByExercise extends Component {

    // state = {
    //     getNumberOfTraininsURL:
    //         "http://localhost:8080/v1/statistics/training_days/Mihu"
    // };
    //
    // componentDidMount() {
    //     fetch(this.state.getNumberOfTraininsURL)
    //         .then(response=>response.json())
    //         .then(result => {
    //
    //             console.log(result);
    //             this.setState({result})
    //         })
    // }


    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <React.Fragment>
                    <div>
                        By Exercise
                    </div>
                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default StatByExercise;