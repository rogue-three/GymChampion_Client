import React, { Component } from "react";

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class LoginValidationForm extends Component {

    state = {
        password: '',
        login: '',
        showPassword: false,
      };

      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };

      loginChange = (event) => {
        this.setState({login: event.target.value})
        
      };

    passwordChange = (event) => {
        this.setState({password: event.target.value})
      };

      getLoginAndPassword = () => {
        let apiUrl = 'http://localhost:8080/v1/login_data/login/' + this.state.login;
      
         fetch(apiUrl)
        .then(response => response.json())
        .then(result => {
            if (this.state.password === result.password) {
                alert("succes!");
            } else {
                alert("Bad password!");
            }
        }); 
    }
    

    render() {

        return (
            <Grid container spacing={8} alignItems="center" justify="center" direction="column">
                <Grid container alignItems="center" justify="center">
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Login" 
                        value={this.state.login} onChange={this.loginChange}/>
                    </Grid>
                    <Grid item>
                        <AccountCircle />
                    </Grid>
              </Grid>
                <FormControl>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.passwordChange}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            >
                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <br></br>

                <Button variant="contained" color="primary" onClick={this.getLoginAndPassword}>
                        Log in
                </Button>
                 <br></br>

                <Typography variant="button" color="primary" gutterBottom>
                    OR
                </Typography>
                <Button variant="contained" color="primary">
                    Sign Up
                </Button>
        </Grid>
        
        );
    }
}

export default LoginValidationForm;