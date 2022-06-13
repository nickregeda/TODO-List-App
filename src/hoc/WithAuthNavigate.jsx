import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const withAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to='/'/>
            }
            return <Component {...this.props}/>
        }
    }

    let mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.userReducer.isAuth,
        }
    }
    return connect(mapStateToPropsForRedirect, {})(NavigateComponent);
}
export default withAuthNavigate;
