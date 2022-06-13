import s from './UpdateProfile.module.css'
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
            <button>Ok</button>
        </Form>
    )
}

const UpdateProfile = (props) => {

    return (
        <div className={s.container}>
            <Formik
                enableReinitialize={true}
                initialValues={{email: props.profile.email, name: props.profile.name, age: props.profile.age}}
                // validationSchema={}
                onSubmit={(values) => {
                    props.onUpdateSubmit(values)
                }}>
                {({values}) => {
                    return <UpdateProfileForm/>
                }}
            </Formik>
        </div>
    )
}

export default UpdateProfile;