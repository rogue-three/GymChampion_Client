import React, { Component} from 'react';

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

class SignUp extends Component {

    state = {
        password: '',
        login: '',
        showPassword: false,
        email:''
      };

      handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };
    
      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };
    

    render() {

        return (
            <Grid container spacing={8} alignItems="center" justify="center" direction="column">
                 <Typography variant="button" color="primary" gutterBottom>
                    Registration of new user:
                </Typography>
                <br></br>
                <Grid item>
                    <TextField id="input-with-icon-grid" label="Login" />
                </Grid>
         
                <FormControl>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
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
                    <TextField id="input-with-icon-grid" label="E-mail" />
                </Grid>
         
                <br></br>

                <Button variant="contained" color="primary">
                        Sign Up
                </Button>
                 <br></br>

                <Typography variant="button" color="primary" gutterBottom>
                    OR
                </Typography>
                <Button variant="contained" color="primary">
                    Back to login
                </Button>
        </Grid>
        
        );
    }
}

export default SignUp;
