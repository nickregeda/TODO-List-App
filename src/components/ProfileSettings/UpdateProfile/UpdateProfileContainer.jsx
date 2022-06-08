import {Formik, Form, Field, ErrorMessage} from "formik";

export const UpdateProfileForm = (props) => {
    return (
        <Form>
            <div>
                <label htmlFor="email">email</label>
                <Field name={'email'} type={'email'}/>
                <ErrorMessage name={'email'} component={'div'}/>
            </div>
            <div>
                <label htmlFor="name">name</label>
                <Field name={'name'} type={'text'}/>
                <ErrorMessage name={'name'} component={'div'}/>
            </div>
            <div>
                <label htmlFor="age"></label>
                <Field name={'age'} type={'number'}/>
                <ErrorMessage name={'age'} component={'div'}/>
            </div>
        </Form>
    )
}

const UpdateProfile = (props) => {

    let onProfileUpdate = (values) => {
        console.log(values);
    }

    return (
        <div className={s.container}>
            <Formik
                initialValues={}
                validationSchema={}
                onSubmit={}>
                {({values}) => {
                    return <UpdateProfileForm/>
                }}
            </Formik>
        </div>
    )
}

export default UpdateProfile;