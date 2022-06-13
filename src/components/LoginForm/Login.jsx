import {Formik, Form, Field, ErrorMessage} from "formik";
import {Navigate} from 'react-router-dom';
import s from './Login.module.css';
import authFormSchema from "../../formValidation/authFormSchema";

export const LoginForm = (props) => {
    return (
        <Form className={s.form}>
            <div className={s.item}>
                <label className={s.label} htmlFor="email">email</label>
                <Field name={'email'} type={'email'} className={s.field} autoComplete={'off'}/>
                <ErrorMessage className={s.error_mes} name={'email'} component={'div'}/>
            </div>
            <div className={s.item}>
                <label className={s.label} htmlFor="">password</label>
                <Field name={'password'} type={'password'} className={s.field} autoComplete={'off'}/>
                <ErrorMessage className={s.error_mes} name={'password'} component={'div'}/>
            </div>
            <button className={s.login_button}>Log In</button>
        </Form>
    )
}

const Login = (props) => {

    if (props.isAuth) {
        return <Navigate to={'/todo-list'}/>
    }

    let onSubmit = (values) => {
        props.login(values.email, values.password)
    }

    return (
        <div className={s.container}>
            <h1 className={s.main_label}>Login</h1>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={authFormSchema}
                onSubmit={onSubmit}>
                {({values}) => {
                    return <LoginForm/>
                }}
            </Formik>
        </div>
    )
}

export default Login;