import * as Yup from 'yup';

const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);


export const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, "First name have atleast 2 character")
        .max(50, "Too Long!")
        .required("Please Enter first name"),
    email: Yup.string()
        .email("Invalid email")
        .matches(emailRegex, "Invalid Email")
        .required("Email is required"),
    password: Yup.string().min(8).required("Please Enter Your Password"),
});
