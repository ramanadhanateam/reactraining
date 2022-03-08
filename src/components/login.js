import React from'react';
import {Avatar, Grid,Paper,Typography,Link}from '@mui/material';
import { padding } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';




const Login=()=>{
   const paperstyle= {padding:20,height:'70vh',width:280,margin:'20px auto'}
   const avatarstyle= {backgroundColor:'blue'}
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
    const btnstyle={margin: '8px 0px',padding: '8px',inlineSize: '-webkit-fill-available',letterSpacing:'2px' }
    const username={ margin:'8px 0',padding:'8px',inlineSize: '-webkit-fill-available'}
    const password={ margin:'8px 0',padding:'8px', inlineSize: '-webkit-fill-available'}
    return(
        <Grid>
            <Paper elevation={10}style={paperstyle}>
                <Grid align='center'>
                <Avatar style={avatarstyle}><HomeIcon/></Avatar>
                <h2>Login</h2>
                </Grid>
                <TextField label="username"placeholder="enter your name" style={username}fullwidth required/>
                <TextField label="password"placeholder="enter your password" type="password" style ={password}fullwidth required/>
        
                 <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Remember me"
          labelPlacement="end"
  
        />
 
                <Grid align='center'>
                        <Button type ="submit"variant="contained"style={btnstyle} size="large" >LOGIN</Button>
                </Grid>
                <Typography> <Link href="#" >
                                    Forgot password?    
                              </Link> 
                </Typography>
                    <Typography>Need an account? <Link href="#" >
                                     Sign up 
                              </Link> 
                    </Typography>
                 
            </Paper>
                
        </Grid>
    );
}
export default Login;