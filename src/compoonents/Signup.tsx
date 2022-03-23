
import React from 'react';
import {Grid,CardContent,Card}from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik,Formik,Form,Field,FormikConfig,FormikValues} from 'formik';
import * as Yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StateNames from'./StateNames';


const validationSchema = Yup.object().shape({
  firstName: Yup
            .string()
            .required('First Name Required'),
   lastName:Yup
            .string()
            .required("Last Name required"),
  age:Yup
            .number()
            .positive("Age can't start with a minus")
            .integer("Age can't include a decimal point")
            .required('age is required')
            .min(18, "You must be at least 18 years")
            .max(60, "You must be at most 65 years"),
  email:Yup 
            .string()
            .required('email is required')
            .email(),
  password:Yup.string()
            .required('password is reqired'),
  address1:Yup
            .string()
            .required('Address1 required'),
  address2:Yup
            .string()
            .required('Address2 required'),
  address3:Yup
            .string()
            .required('Address3 required'),
  phoneNumber:Yup
            .number()
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(10,"A phone number should contain atleast 10 digits")
            .max(12,"A phone number should contain maximum 12 digits number")
            .required('A phone number is required'),
  pinNumber:Yup
            .number()
            .positive("A pin number can't start with a minus")
            .integer("A pin number number can't include a decimal point")
            .min(6,"pin number should be a 6 digit number")
            .max(6,"pin number should be a 6 digit number")
            .required('A pin number is required'),


});
 const Signup = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        age:'',
        email:'',
        password:'',
        gender:'',
        address1:'',
        address2:'',
        address3:'',
        phoneNumber:'',
        pinNumber:'',
        state:''
      }}
            onSubmit={values => {
        // same shape as initial values
        alert(JSON.stringify(values,null,2));
      }}
      validationSchema={validationSchema}
    >
      {(formik)=>
      (
        <Form onSubmit={formik.handleSubmit}>
          <div>
          <Field  name="firstName"
                  id="firstName" 
                  component={TextField} 
                  label="First Name"
                  value={formik.values.firstName} 
                  onChange={formik.handleChange}
                  error={formik.touched.firstName&&Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  />
                
          <Field name="lastName" 
          component={TextField} 
          label="Last Name"
          id="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName&&Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName&&formik.errors.lastName}
          />
          </div>
<div>        
          <Field name="age" 
           component={TextField} 
           label="Age" 
           type="number" 
           min="0" 
           max="20" 
           id="age"
           value={formik.values.age}
           onChange={formik.handleChange}
           error={formik.touched.age&&Boolean(formik.errors.age)}
           helperText={formik.touched.age&&formik.errors.age}
           />
        

          <Field name="email" 
          component={TextField} 
          label="Email" 
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email&&Boolean(formik.errors.email)}
          helperText={formik.touched.email&&formik.errors.email}
          />
          <Field name="password"
           component={TextField} 
           label="Password"
           id="password"
           value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password&&Boolean(formik.errors.password)}
            helperText={formik.touched.password&&formik.errors.password}
            type="password"
            />
        
      <FormControl sx={{ m: 1, minWidth: 120 }} >
                  <InputLabel id="gender">
                  Gender</InputLabel>
                     <Select
  
                          id="gender"
        
                          label="Gender"
                      >
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Others"}>Others</MenuItem>
                    </Select>
      </FormControl>


                 <Field name="address1" 
                 component={TextField} 
                 label="address1" 
                 id="address1"
                 value={formik.values.address1}
                 onChange={formik.handleChange}
                 error={formik.touched.address1&&Boolean(formik.errors.address1)}
                 helperText={formik.touched.address1&&formik.errors.address1}
                 />
                 <Field name="address2" 
                 component={TextField} 
                 label="address2"
                 id="address2"
                 value={formik.values.address2}
                 onChange={formik.handleChange}
                 error={formik.touched.address2&&Boolean(formik.errors.address2)}
                 helperText={formik.touched.address2&&formik.errors.address2}
                  />
                 <Field name="address3"
                  component={TextField} 
                  label="address3"
                  id="address1"
                  value={formik.values.address3}
                  onChange={formik.handleChange}
                  error={formik.touched.address3&&Boolean(formik.errors.address3)}
                  helperText={formik.touched.address3&&formik.errors.address3} 
                  />
                 <Field name="phoneNumber" 
                 component={TextField} 
                 label="PhoneNumber"
                 id="phoneNumber"
                 value={formik.values.phoneNumber}
                 onChange={formik.handleChange}
                 error={formik.touched.phoneNumber&&Boolean(formik.errors.phoneNumber)}
                 helperText={formik.touched.phoneNumber&&formik.errors.phoneNumber}
                  />
                  <Field name="pinNumber" 
                 component={TextField} 
                 label="Pin Number"
                 id="pinNumber"
                 value={formik.values.pinNumber}
                 onChange={formik.handleChange}
                 error={formik.touched.pinNumber&&Boolean(formik.errors.pinNumber)}
                 helperText={formik.touched.pinNumber&&formik.errors.pinNumber}
                  />
               <StateNames />
               <Button type="submit" variant='contained'color='primary'>Submit</Button>
               </div>
        </Form>
      )}
    </Formik>
  </div>
);
export default Signup;
