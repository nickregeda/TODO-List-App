import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={s.container}>
            <div>
                <NavLink className={s.menu_item} to={'/todo-list'}>ToDo List</NavLink>
            </div>
            <div>
                <NavLink className={s.menu_item} to={'/settings'}>Settings</NavLink>
            </div>
            <div>
                <button className={s.logout_button}>LogOut ▶</button>
            </div>
        </div>
    )
}

export default Navbar;