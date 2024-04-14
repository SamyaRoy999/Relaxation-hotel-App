import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivetedRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if (user) {
        return children
    }
    return <Navigate to="/login"></Navigate>
}

export default PrivetedRoute

PrivetedRoute.propTypes = {
    children: PropTypes.any
  };