import './App.css';
import {Routes, Route} from 'react-router-dom';
import LoginContainer from "./components/LoginForm/LoginContainer";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";
import ProfileSettingsContainer from "./components/ProfileSettings/ProfileSettingsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UnauthPage from "./components/UnauthPage/UnauthPage";
import {useEffect} from "react";

function App() {
    useEffect(() => {

    }, )
    return (
        <div className="container">
            <NavbarContainer/>
            <div className={'app'}>
                <Routes>
                    <Route path={'/'} element={<UnauthPage/>}/>
                    <Route path={'/todo-list'} element={<ToDoListContainer/>}/>
                    <Route path={'/login'} element={<LoginContainer/>}/>
                    <Route path={'/settings'} element={<ProfileSettingsContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
