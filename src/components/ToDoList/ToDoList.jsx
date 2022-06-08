import {userAPI} from "../../dal/api";

const Main = (props) => {

    let onRegister = () => {
        userAPI.registerUser();
    }

    let onLogin = () => {
        props.login('kolyareggeda@gmail.com', 'todo1234');
    }

    let onLogout = () => {
        userAPI.logout(props.token);
    }

    let getMyProfile = () => {
        userAPI.getMe();
    }

    return (
        <div>
            <h1>Main</h1>
            <button onClick={onRegister}>RegisterTest</button>
            <button onClick={onLogin}>LoginTest</button>
            <button onClick={onLogout}>LogoutTest</button>
            <button onClick={getMyProfile}>GetMyProfileTest</button>
        </div>
    )
}

export default Main;