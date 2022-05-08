import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from "react";
import { Route } from "react-router-dom";
import Register from "./register";

const Login = () => {
    
    const paperStyle = { padding :20 , height : '70vh', width : 280, margin : '20px auto'}
    const avatarStyle = {backgroundColor : "#1bbd7e"}
    const btnStyle = {margin : "8px 0px"}

    return (
        <Grid>
            <Paper elevation ={10} style = {paperStyle}>
                <Grid  align="center">

                    <Avatar style={avatarStyle}>
                    <LockOutlinedIcon/>
                    </Avatar>
                    <h2> Sign In </h2>

                </Grid>
                
                <TextField label="Email" placeholder="Enter Email" fullWidth></TextField>
                <TextField type="password" label="Password" placeholder="Enter Password" fullWidth></TextField>
                <FormControlLabel 
                    control={
                        <Checkbox 
                            name = "checkedB"
                            color="primary"
                        />} 
                        label="Remember me" />
                <Button type = "submit" color="primary" variant = "contained" style={btnStyle} fullWidth>Sign in</Button>
                <Typography>
                    <Link href="#"> forgot password?</Link>
                </Typography>
                <Typography>  Do you have an account? 
                    <Link> Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login