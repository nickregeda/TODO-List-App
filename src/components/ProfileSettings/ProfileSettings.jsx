import s from './ProfileSettings.module.css'
import {useState} from "react";
import UpdateProfileContainer from "./UpdateProfile/UpdateProfileContainer";

const ProfileSettings = (props) => {

    const [isUpdate = false, setIsUpdate] = useState();
    let onUpdate = () => {
        setIsUpdate(true);
    }
    let onUpdateSubmit = (values) => {
        props.updateUserProfile(values.name, values.email, values.age, props.token)
        setIsUpdate(false)
    }

    return (
        <div className={s.container}>
            <h1>Settings</h1>
            <button onClick={onUpdate}>Change Profile</button>
            {isUpdate && <div><UpdateProfileContainer onUpdateSubmit={onUpdateSubmit}/></div>}
        </div>
    )
}

export default ProfileSettings