import s from './Navbar.module.css'
import {NavLink, Navigate} from "react-router-dom";

const Navbar = (props) => {
    let onLogOut = () => {
        props.logout(props.token);
    }

    return (
        <div className={s.container}>
            <div>
                <NavLink className={s.menu_item} to={'/todo-list'}>ToDo List</NavLink>
            </div>
            <div>
                <NavLink className={s.menu_item} to={'/settings'}>Settings</NavLink>
            </div>
            {props.isAuth ?
                <div>
                    <button onClick={onLogOut} className={s.logout_button}>LogOut ▶</button>
                </div>
                :
                <div>
                    <NavLink className={s.menu_item} style={{fontSize: '20px'}} to={'/login'}>LogIn ▶</NavLink>
                </div>
            }
        </div>
    )
}

export default Navbar;