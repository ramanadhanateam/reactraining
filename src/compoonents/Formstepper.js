import React, { useState } from "react";
import { Typography, Button,Step,StepLabel,CardContent,Card,TextField,  Stepper,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {  useForm,Controller, FormProvider, useFormContext,} from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StateNames from "./StateNames";
import {useNavigate} from "react-router-dom";
 
const useStyles = makeStyles((theme) => ({
  button: {
    
    padding:'23px',
    margin:'0px 5px',
    width:'-webkit-fill-available',
    display:'flex',
    height:'20px',
  },
  form:{
    margin:'auto',
    padding: '100px',
    width: 'max-content'

  },
  card:{
    padding: '80px',
    width: 'fit-content',
    margin: 'auto',
  },
  //textfield:{
    //margin: 'auto',
    //padding: '2px',
    //width: '600px',
    //height: 'fit-content'

  //},
  stepper:{
    margin:'-70px',
    padding:'initial',

  },

  
}));


function getSteps() {
  return [
    "First and Last name",
    "Email and phone number",
    "Password and confirm password",
    "Address and Pin",
    "Age and Gender",
    "choose your state"
  ];
}


const BasicForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  const classes = useStyles();
  return (
    
    <>
    <div >
     <Card className={classes.card}>
      <CardContent >
 
  
    
      <Controller
        control={control}
        name="firstName"
        rules={{ required:"field required"}}
        
                    

        render={({ field }) => (
          <TextField
          className="textfield"
            id="first-name"
            label="First Name"
            variant="outlined"
            autoComplete="off"
            placeholder="Enter Your First Name"
            fullWidth
        
            
            {...field}
            error={Boolean(errors?.firstName) }
           
            helperText={errors.firstName?.message}
         
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            autoComplete="off"
            {...field}
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />
    
           </CardContent>
           </Card>
 
           </div>

    </>
  
    
  );
};
const ContactForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  const classes = useStyles();
  return (
    <> <div >
    <Card className={classes.card}>
     <CardContent >

      <Controller
        control={control}
        name="emailAddress"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            type="email"
            autoComplete="off"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.emailAddress)}
            helperText={errors.emailAddress?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        rules={{ required: "this field is required.",
                 minLength:{value:10 ,
                            message:"A phone number should contain atleast 10 digits"},
                 maxLength:{value:12,
                            message:"A phone number should contain maximum 12 digits number"}
                           }}
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            //autoComplete="off"
            margin="normal"
            {...field}
            error={Boolean(errors?.phoneNumber)}
            helperText={errors.phoneNumber?.message}
          />
        )}
      />
      
      </CardContent>
           </Card>
 
           </div>
    
    </>
  );
};
const PersonalForm = () => {
  const {
    control,register,getValues,
    formState: { errors },
  } = useFormContext();
  
  console.log(errors);
  const classes = useStyles();
  
  return (
    
    <>
     <div >
    <Card className={classes.card}>
     <CardContent >
    <Controller
    control={control}
    name="password"
    //rules={{ required: "this field is required." }}
    render={({field })=>(
      <TextField
      id="password"
      label="Password"
      variant="outlined"
      type="password"
      placeholder="Enter your password"
      fullWidth
      rules={{ required: "this field is required." }}
      margin="normal"
      {...field}
      error={Boolean(errors?.password)}
      helperText={errors.password?.message}
      //{/*ref={register({
      //  required: "this field required."
      //})}

      //error= {errors.password && (
        //<div>{errors.password.message}</div>
      //)}*/}
      />
      
      
    )}
    
    />
     <Controller
    control={control}
    name="ConfirmPassword"
    rules={{ required: "this field is required.",maxLength:{value:6,message:"invalid"},minLength:{value:6,message:"invalid"} }}
    //rules={{ required: "this field is required."}}
    render={({field })=>(
      <TextField
      id="ConfirmPassword"
      label="Confirm Password"
      variant="outlined"
      type="password"
      placeholder="Confirm your password"
      fullWidth
      margin="normal"
      
  
      
      {...field}
      
      error={Boolean(errors?.ConfirmPassword)}
      helperText={errors.ConfirmPassword?.message}
      
     //{/*} ref={register({
     //   required: "this field required.",
       // validate: (value) =>
         // value === getValues("password") || "password doesn't match."
      //})}
      //error= {errors.ConfirmPassword && (
        //<div>
          //{errors.ConfirmPassword.message}
       // </div>
      //)}*/}
        />
    )}
    />
     
     </CardContent>
           </Card>
 
           </div>
     
    </>
  );
};

const AddressForm = () => {
  const {
    control,register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  const classes = useStyles();
  return (
    <>
     <div >
    <Card className={classes.card}>
     <CardContent >
     <Controller
        control={control}
        name="address1"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            autoComplete="off"
            {...field}
            error={Boolean(errors?.address1)}
            helperText={errors.address1?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            autoComplete="off"
            margin="normal"
            {...field}
            error={Boolean(errors?.address2)}
            helperText={errors.address2?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="address3"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="address3"
            label="Address 3"
            variant="outlined"
            placeholder="Enter Your Address 3"
            fullWidth
            autoComplete="off"
            margin="normal"
            {...field}
            error={Boolean(errors?.address3)}
            helperText={errors.address3?.message}
          />
        )}
        />
         <Controller
        control={control}
        name="pinNumber"
        rules={{ required: "this field is required.", minLength:{value:6,message:"pin number should be a 6 digit number"},maxLength:{value:6,message:"pin number should be a 6 digit number"}}}
        render={({ field }) => (
          <TextField
            id="pinNumber"
            label="Pin number"
            variant="outlined"
            placeholder="Enter Your Pin number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.pinNumber)}
            helperText={errors.pinNumber?.message}
          />
        )}
        />
         </CardContent>
           </Card>
 
           </div>
     
    </>
  );
};
const AgeForm = () => {
  const {
    control,register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  const classes = useStyles();
  return (
    <>
     <div >
    <Card className={classes.card}>
     <CardContent >
    
     <Controller
        control={control}
        name="age"
      
        rules={{ required: "this field is required.", maxLength:{value:2,message:"enter valid age"},integer:''}}
        render={({ field }) => (
          <TextField
            id="age"
            label="Age"
            variant="outlined"
            type="number"
            placeholder="Enter Your Age"
          
        
            {...field}
            error={Boolean(errors?.age)}
            helperText={errors.age?.message}
          />
        )}
      />   
         <Controller
          control={control}
          name="gender"
          
          rules={{ required: "this field is required." }}
          
          render={({ field }) => (
            <FormControl sx={{ m: 1, minWidth: 120,minInlineSize:200 }}
            >
              
            <InputLabel id="gender">Gender</InputLabel>
               <Select
               
               {...field}      
                    id="gender"
  
                    label="Gender"
                    
                >
                  
                  <MenuItem value={"male"} >Male</MenuItem>
                  <MenuItem value={"Female"}  >Female</MenuItem>
                  <MenuItem value={"Others"}    >Others</MenuItem>
              </Select>
</FormControl>
          )}  
          />
          </CardContent>
           </Card>
 
           </div>
     
    </>
  );
};
const StateAndPhoneForm = () => {
  const {
    control,register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  const classes = useStyles();
  return (
    <>
  <div >
    <Card className={classes.card}>
     <CardContent >
     <StateNames />
     </CardContent>
           </Card>
 
           </div>
        
    </>
  );
};


function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <AddressForm />;
      case 4:
        return<AgeForm />
        case 5:
          return<StateAndPhoneForm />
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      password:"",
      ConfirmPassword:"",
      address1: "",
      address2: "",
      address3: "",
      pinNumber:"",
      age: "",
      gender: "",
      StateNames: "",
    },
   
  });
  
  
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
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

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  let navigate=useNavigate();


  return (
    <div className={classes.card}>
      <Stepper alternativeLabel activeStep={activeStep} className={classes.stepper}>
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
              
              </Typography>
            );
          }
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
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
        <div className={classes.card}>
        <Typography>
          <h1>completed!!</h1>
         <Button
         className={classes.button}
         variant="contained"
         color="primary"
         align="center"
         onClick={()=>{navigate("/dash");}}
       >
         Finish
       </Button>
       
       </Typography>
       </div>
      ) : (
        <>
        <div className={classes.card}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)} >
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {/*{isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}*/}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                //onClick={handleNext}
                type="submit"
                //onClick={()=>{
                  //if(activeStep===steps.length -1)
                  //window.alert(JSON.stringify(methods,null,2));
                //}}
              
               
              >
                {activeStep === steps.length - 1 ? "finish" : "Next"}
              
              </Button>
              
           
            </form>
          </FormProvider>
          </div>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;