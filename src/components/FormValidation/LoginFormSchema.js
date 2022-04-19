import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(20, "Nice try, nobody has a first name that long")
        .required("Required"),
    password: Yup.string()
        .min(4, "Must be longer than 4 characters")
        .required("Required")
});
export default loginFormSchema;