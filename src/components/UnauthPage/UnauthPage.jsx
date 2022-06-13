import s from './UnauthPage.module.css';
import {NavLink} from "react-router-dom";

const UnauthPage = (props) => {
    return (
        <div className={s.container}>You must <NavLink style={{color: 'white'}} to={'/login'}>log in</NavLink></div>
    )
}

export default UnauthPage;