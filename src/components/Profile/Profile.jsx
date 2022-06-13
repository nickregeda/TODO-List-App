import s from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.container}>
            <div>{props.profile.name}</div>
            <div>age: {props.profile.age}</div>
            <div>email: {props.profile.email}</div>
        </div>
    )
}

export default Profile;