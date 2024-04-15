import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivetedRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const loction = useLocation()
    if (!user) {
        return <Navigate to='/login' state={loction?.pathname || '/'}></Navigate>
    }
    return <div>
        {children}
    </div>
}

export default PrivetedRoute

PrivetedRoute.propTypes = {
    children: PropTypes.any
  };