import React, { Component} from 'react';
import { Link } from 'react-router-dom'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


class SignUpForm extends Component {

    state = {
        password: '',
        login: '',
        email:'',
        showPassword: false,
        urlToSendLoginData: "http://localhost:8080//v1/login_data"
      };

      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };

      passwordChange = (event) => {
        this.setState({password: event.target.value})
      };

        emailChange = (event) => {
        this.setState({email: event.target.value})
      };

      loginChange = (event) => {
        this.setState({login: event.target.value})
      };

      getLoginPasswordAndEmailAndSignUpNewUser = () => {
        let userToSend = this.getJSONtoSendInBodyWithDataFromUser();
        const urlToSend = this.state.urlToSendLoginData;

          fetch(urlToSend, {
            method: 'POST', 
            body: JSON.stringify(userToSend), 
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }).then(res => res.json());
        };
        

    getJSONtoSendInBodyWithDataFromUser = () => {
        let userObj =   {
            "loginId": 1,
            "password": null,
            "email": "null",
            "user": {
                "login": "null",
                "nickname": null,
                "birthDate": null,
                "weight": null,
                "gender": null
                            },
            "userRole": {
                "id": 1,
                "roleName": "USER"
            },
            "archivized": false
        };
        userObj.email = this.state.email;
        userObj.password = this.state.password;
        userObj.user.login = this.state.login;

        return userObj;
    };
    

    render() {

        const {password,login,email}  = this.state;

        return (
            <Grid container spacing={8} alignItems="center" justify="center" direction="column">
                 <Typography variant="button" color="primary" gutterBottom>
                    Registration of new user:
                </Typography>
                <br></br>
                <Grid item>
                    <TextField label="Login" value={login}
                    onChange={this.loginChange}/>
                </Grid>
         
                <FormControl>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={password}
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
                <Grid item>
                    <TextField  label="E-mail" value={email}
                    onChange={this.emailChange}/>
                </Grid>
                <br></br>

                <Button variant="contained" color="primary" 
                onClick={this.getLoginPasswordAndEmailAndSignUpNewUser}>
                        Sign Up
                </Button>
                 <br></br>

                <Typography variant="button" color="primary" gutterBottom>
                    OR
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/">
                    Back to login
                </Button>
        </Grid>

        );
    }
}

export default SignUpForm;
