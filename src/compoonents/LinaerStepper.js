import React, { useState } from "react";
import {Typography,TextField,Button,Stepper,Step,StepLabel,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StateNames from "./StateNames";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import * as Yup from 'yup';

const schema= Yup.object().shape({
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
  password:Yup
            .string()
            .required('password is reqired'),
  confirmPassword:Yup
            .string()
            .required()
            .oneOf([Yup.ref("passsword"),null]),
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


})

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));


function getSteps() {
  
  return [
    "Basic information",
    "Additional Information",
   
  ];
  
}

function getStepContent(step) {
 
  
  switch (step) {
    
    case 0:
      return (
        
        <>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
            ref={register}
          />
          <p>{errors.firstName?.message}</p>
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
            ref={register}
          />
        </>
      );

    case 1:
      return (
        <>
        
         <TextField
            id="age"
            label="Age"
            variant="outlined"
            placeholder="Enter Your Age"
            fullWidth
            margin="normal"
            name="age"
            type="number" 
            min="0" 
            max="20" 
            ref={register}
          />
         

        
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            name="emailAddress"
            ref={register}
          />
           <TextField
            id="password"
            label="Password"
            variant="outlined"
            placeholder="Enter Your password"
            fullWidth
            margin="normal"
            name="password"
            type="password"
            ref={register}
          />
         
           <FormControl sx={{ m: 1, minWidth: 120 }} >
                  <InputLabel id="gender">Gender</InputLabel>
                     <Select
  
                          id="gender"
        
                          label="Gender"
                      >
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Others"}>Others</MenuItem>
                    </Select>
      </FormControl>
      <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            name="address1"
            ref={register}
          />
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            name="address2"
            ref={register}
          />
           <TextField
            id="address3"
            label="Address 3"
            variant="outlined"
            placeholder="Enter Your Address 3"
            fullWidth
            margin="normal"
            name="address3"
            ref={register}
          />
           <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            name="phoneNumber"
            type="number" 
            ref={register}
          />
           <TextField
            id="pinNumber"
            label="Pin Number"
            variant="outlined"
            placeholder="Enter Your Pin Number"
            fullWidth
            margin="normal"
            name="pinNumber"
            type="number" 
            ref={register}
          />
            <StateNames />
        </>
        
      );
    default:
      return "unknown step";
    
    
  }
    
   
}



const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div>
      <Card>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
           
            <Button onClick={handleReset}variant="contained"className={classes.button} color="primary">Reset</Button>
          </Box>
        </Typography>
      ) : (
        <>
          <form onSubmit={handleSubmit(submitForm)}>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
         
        </>
        
      )}
       
         
       </Card>  
    </div>
    
  );
};

export default LinaerStepper;