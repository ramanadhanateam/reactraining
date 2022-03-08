import React from'react';
import {Grid,CardContent,Card}from '@mui/material';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import { useFormik} from 'formik';
import * as Yup from 'yup';



const validationSchema = Yup.object({
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
     
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .matches(/[a-z]/, 'should contain lowercase letters' )
    .matches(/[A-Z]/, 'should contain uppercase letters' )
    .matches(/[0-9]/, 'should contain numbers letters' )
    .matches(/[@,#,$,!,^,&&,****,(]/, 'should contain one special charater' )
    .required("password required"),
   
});

const Login = () => {
  const formik = useFormik({
    initialValues:{
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     localStorage.setItem('user',JSON.stringify(formik));
     
    },
  });

  return (
    <div >
      
      <Card sx={{ maxWidth: 500}} >
      <CardContent>
        
      <Grid container spacing={2} direction='column' padding={2} >
      <Grid align='center' >
        <Grid item xs={12}>
      <h1>Login</h1>
      </Grid>
      <form onSubmit={formik.handleSubmit}>
      <Grid item xs={12} padding={2} >
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        </Grid>
        <Grid item xs={12} padding={2}>
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        </Grid>
     <Grid item xs={12}padding={2}>
    
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
        </Grid>
      </form>
      </Grid>
      </Grid>
      </CardContent>
      </Card>
    
    </div>
  );
};

export default Login;

  
