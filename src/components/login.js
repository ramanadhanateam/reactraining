import { Grid, CardContent, Card,Button,TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Style.css'
const validationSchema = Yup.object({
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(7, 'Password is too short - should be 7 chars minimum.')
        .matches(/[a-z]/, 'should contain lowercase letters')
        .matches(/[A-Z]/, 'should contain uppercase letters')
        .matches(/[0-9]/, 'should contain numbers letters')
        .matches(/[@,#,$,!,^,&&,****,(]/, 'should contain one special charater')
        .required("password required"),
});
const Login = () => {
    const emails = ['tom@yopmail.com', 'jerry@yopmail.com', 'sharon@yopmail.com', 'jim@yopmaiom ', 'jit@yopmail.com']
    let navigate = useNavigate();
    var formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const checkIsExist = emails.filter(e => e === values.email)
            if (checkIsExist.length) {
                window.alert('you cannot use this email')
                return false
            }           
            localStorage.setItem('user', JSON.stringify(formik));
            window.location.replace("/dashboard");
        },
    });
    return (
        <div className='card-container' >
            <Card sx={{ maxWidth: 500 }}>
                <CardContent >
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
                                        type="email"
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
                                <Grid item xs={12} padding={2}>
                                    <Button color="primary" variant="contained" fullWidth type="submit"
                                    >
                                        submit
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

