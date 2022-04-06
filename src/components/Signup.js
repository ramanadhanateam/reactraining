import React, { useEffect, useState } from "react";
import { Typography, Button, Step, StepLabel, CardContent, Card, TextField, Stepper, FormHelperText} from "@mui/material";
import { useFormik} from "formik";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StateNames from "./StateNames";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import './Style.css';

const validationSchema = Yup.object({
    firstName: Yup
        .string('Enter your first name')
        .required('first name is required'),
    lastName: Yup
        .string('Enter your last name')
        .required('last name is required'),
    emailAddress: Yup
        .string('Enter a valid email')
        .required('last name is required'),
    password: Yup
        .string('Enter your password')
        .min(7, 'Password is too short - should be 7 chars minimum.')
        .required("password required"),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'password does not match')
        .required("confirm password required"),
    phoneNumber: Yup
        .string()
        .min(10,'atleast 10 numbers')
        .max(12)
        .required('A phone number is required'),
    age: Yup
        .number("Age can't include a decimal point")
        .min(8)
        .test('max', value => value <= 65 && value >= 18)
        .required('A phone number is required'),
    gender: Yup
        .string()
        .required('gender is required'),
    address1: Yup
        .string()
        .required('Address required'),
    address2: Yup
        .string()
        .required('Address required'),
    address3: Yup
        .string()
        .required('Address required'),
    pinNumber: Yup
        .string()
        .min(6)
        .max(6)
        .required('A pin number is required'),
});
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
const BasicForm = ({ formik }) => {
    return (
        <>
            <div className="form-field2">
                <Card >
                    <CardContent >
                        <div className="form-field">
                            <div className="text-field">
                                <div className="textfield-wrap">
                                <TextField
                                    className="textfield"
                                    id="first-name"
                                    label="First Name"
                                    variant="outlined"
                                    autoComplete="off"
                                    name="firstName"
                                    placeholder="Enter Your First Name"
                                    fullWidth
                                    value={formik.values.firstName}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    onChange={formik.handleChange}
                                />
                                    <FormHelperText className="helpertext-wrap">{formik.errors.firstName || ''}</FormHelperText>
                                </div>
                                <div className="textfield-wrap">
                                    <TextField
                                                id="last-name"
                                                label="Last Name"
                                                variant="outlined"
                                                placeholder="Enter Your Last Name"
                                                fullWidth
                                                name="lastName"
                                                onChange={formik.handleChange}
                                                autoComplete="off"
                                                value={formik.values.lastName}
                                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                     />
                                    <FormHelperText className="helpertext-wrap">{formik.errors.lastName || ''}</FormHelperText>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};
const ContactForm = ({ formik }) => {

    return (
        <> <div className="form-field2">
            <Card >
                <CardContent >
                    <div className="form-field">
                        <div className="text-field">
                        <div className="textfield-wrap">
                            <TextField
                                id="email"
                                label="E-mail"
                                variant="outlined"
                                type="email"
                                autoComplete="off"
                                placeholder="Enter Your E-mail Address"
                                fullWidth
                                name="emailAddress"
                                value={formik.values.emailAddress}
                                error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
                                onChange={formik.handleChange}
                            />
                              <FormHelperText className="helpertext-wrap">{formik.errors.emailAddress || ''}</FormHelperText>
                            </div>
                              <div className="textfield-wrap">
                            <TextField
                                id="phone-number"
                                label="Phone Number"
                                variant="outlined"
                                placeholder="Enter Your Phone Number"
                                fullWidth
                                name="phoneNumber"
                                value={formik.values.phoneNumber}
                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                onChange={formik.handleChange}
                            />
                             <FormHelperText className="helpertext-wrap">{formik.errors.phoneNumber || ''}</FormHelperText>
                             </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        </>
    );
};
const PersonalForm = ({ formik }) => {
    return (
        <>
            <div className="form-field2">
                <Card >
                    <CardContent >
                        <div className="form-field">
                            <div className="text-field">
                            <div className="textfield-wrap">
                                <TextField
                                    id="password"
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    fullWidth
                                    value={formik.values.password}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    onChange={formik.handleChange}
                                />
                                 <FormHelperText className="helpertext-wrap">{formik.errors.password  || ''}</FormHelperText>
                                 </div>
                                 <div className="textfield-wrap">
                                <TextField
                                    id="ConfirmPassword"
                                    label="Confirm Password"
                                    variant="outlined"
                                    type="password"
                                    placeholder="Confirm your password"
                                    fullWidth
                                    name="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    onChange={formik.handleChange}
                                />
                                 <FormHelperText className="helpertext-wrap">{formik.errors.confirmPassword || ''}</FormHelperText>
                                 </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};
const AddressForm = ({ formik }) => {
    return (
        <>
            <div className="address-style">
                <Card >
                    <CardContent >
                        <div className="address-style">
                            <div className="address-containertop">
                                <div className="address-container">
                                <div className="textfield-wrap">
                                    <TextField
                                        id="address1"
                                        label="Address 1"
                                        variant="outlined"
                                        placeholder="Enter Your Address 1"
                                        fullWidth
                                        name="address1"
                                        value={formik.values.address1}
                                        error={formik.touched.address1 && Boolean(formik.errors.address1)}
                                        onChange={formik.handleChange}
                                    />
                                     <FormHelperText className="helpertext-wrap">{formik.errors.address1  || ''}</FormHelperText>
                                     </div>
                                     <div className="textfield-wrap">
                                    <TextField
                                        id="address2"
                                        label="Address 2"
                                        variant="outlined"
                                        placeholder="Enter Your Address 2"
                                        fullWidth
                                        name="address2"
                                        autoComplete="off"
                                        value={formik.values.address2}
                                        error={formik.touched.address2 && Boolean(formik.errors.address2)}
                                        onChange={formik.handleChange}
                                    />
                                     <FormHelperText className="helpertext-wrap">{formik.errors.address2 || ''}</FormHelperText>
                                     </div>
                                </div>
                                <div className="address-container">
                                <div className="textfield-wrap">
                                    <TextField
                                        id="address3"
                                        label="Address 3"
                                        variant="outlined"
                                        placeholder="Enter Your Address 3"
                                        fullWidth
                                        name="address3"
                                        autoComplete="off"
                                        value={formik.values.address3}
                                        error={formik.touched.address3&& Boolean(formik.errors.address3)}
                                        onChange={formik.handleChange}
                                    />
                                     <FormHelperText className="helpertext-wrap">{formik.errors.address3  || ''}</FormHelperText>
                                     </div>
                                     <div className="textfield-wrap">
                                    <TextField
                                        id="pinNumber"
                                        label="Pin number"
                                        variant="outlined"
                                        placeholder="Enter Your Pin number"
                                        fullWidth
                                        name="pinNumber"
                                        value={formik.values.pinNumber}
                                        error={formik.touched.pinNumber && Boolean(formik.errors.pinNumber)}
                                        onChange={formik.handleChange}
                                    />
                                     <FormHelperText className="helpertext-wrap">{formik.errors.pinNumber || ''}</FormHelperText>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};
const AgeForm = ({ formik }) => {
    return (
        <>
            <div className="form-field2">
                <Card >
                    <CardContent >
                        <div className="form-field">
                            <div className="text-field">
                            <div className="textfield-wrap">
                                <TextField
                                    id="age"
                                    label="Age"
                                    variant="outlined"
                                    type="number"
                                    name="age"
                                    placeholder="Enter Your Age"
                                    value={formik.values.age}
                                    error={formik.touched.age && Boolean(formik.errors.age)}
                                    onChange={formik.handleChange}
                                />
                                 <FormHelperText className="helpertext-wrap">{formik.errors.age || ''}</FormHelperText>
                                 </div>
                                 <div className="textfield-wrap select-field">
                                <FormControl sx={{ m: 1, minWidth: 120, minInlineSize: 200 }}
                                >
                                    <InputLabel id="gender">Gender</InputLabel>
                                    <Select
                                        id="gender"
                                        label="Gender"
                                        name="gender"
                                        onChange={formik.handleChange}
                                        value={formik.values.gender}
                                        error={formik.touched.gender && Boolean(formik.errors.gender)}
                                    >
                                        <MenuItem value={"male"} >Male</MenuItem>
                                        <MenuItem value={"Female"}>Female</MenuItem>
                                        <MenuItem value={"Others"}>Others</MenuItem>
                                    </Select>
                                    <FormHelperText className="helpertext-wrap">{formik.errors.gender || ''}</FormHelperText>
                                </FormControl>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};
const StateAndPhoneForm = ({ formik }) => {
    return (
        <>
            <div className="address-style" >
                <Card >

                    <CardContent >
                        <div className="country-dropdown">
                            <StateNames handleChange={(e, value) => formik.setFieldValue('stateNames', value.label)} />
                        </div>
                    </CardContent>

                </Card>
            </div>
        </>
    );
};
function getStepContent(step, formik) {
    switch (step) {
        case 0:
            return <BasicForm formik={formik} />;
        case 1:
            return <ContactForm formik={formik} />;
        case 2:
            return <PersonalForm formik={formik} />;
        case 3:
            return <AddressForm formik={formik} />;
        case 4:
            return <AgeForm formik={formik} />
        case 5:
            return <StateAndPhoneForm formik={formik} />
        default:
            return "unknown step";
    }
}
const LinaerStepper = () => {
    const handleFormSubmit = values => {
        console.log(values)
    }
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            address1: "",
            address2: "",
            address3: "",
            pinNumber: "",
            age: "",
            gender: "",
            stateNames: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values)=>{
            localStorage.setItem('user', JSON.stringify({email:values.emailAddress,password:values.password}));
            alert(window.JSON.stringify(values))
            window.location.replace('/dashboard')
        },
    })
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };    const isStepFalied = () => {
    };
    useEffect(() => {
        formik.validateForm()
    }, [])
    const handleNext = (e) => {
        e.preventDefault()
        const { errors } = formik;
        switch (activeStep) {
            case 0:
                if (errors?.firstName || errors?.lastName) {
                    return false
                }
                setActiveStep(activeStep + 1)
                break
            case 1:
                if (errors?.emailAddress || errors?.phoneNumber) {
                    return false
                }
                setActiveStep(activeStep + 1)
                break
            case 2:
                if (errors?.password || errors?.ConfirmPassword) {
                    return false
                }
                setActiveStep(activeStep + 1)
                break
            case 3:
                if (errors?.address1 || errors?.address2 || errors?.address3 || errors?.pinNumber) {
                    return false
                }
                setActiveStep(activeStep + 1)
                break
            case 4:
                if (errors?.age || errors?.gender) {
                    return false
                }
                setActiveStep(activeStep + 1)
                break

            default:
                setActiveStep(activeStep + 1)
        }
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    let navigate = useNavigate();
    return (
        <div className="steppr-container" >
            <form >
                                    
                <div className="formstepper-pos">
                <Stepper alternativeLabel activeStep={activeStep}  >
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

                        return (
                            <Step {...stepProps} key={index}>
                                <StepLabel {...labelProps}>{step}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                </div>
                {activeStep === steps.length ? (
                    <div align="center" >
                        <Typography>
                            <h1>completed!!</h1>
                            <Button 
                                variant="contained"
                                color="primary"
                                align="center"
                                onClick={formik.handleSubmit}
                            >
                                Finish
                            </Button>
                        </Typography>
                    </div>
                ) : (
                    <>
                        <div className="button-back">
                            {getStepContent(activeStep, formik)}
                            <Button 
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                back
                            </Button>
                            <Button 
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1 ? "finish" : "Next"}
                            </Button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};
export default LinaerStepper;