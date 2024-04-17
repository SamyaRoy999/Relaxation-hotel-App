import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivetedRoute from "../Priveted/PrivetedRoute";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import TravelTips from "../pages/TravelTips/TravelTips";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateEvents from "../pages/PrivateEvents/PrivateEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
   
      {
        path: '/updateProfile',
        element: <PrivetedRoute> <UpdateProfile /> </PrivetedRoute>
      },
      {
        path: '/userProfile',
        element: <UserProfile/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/travel',
        element: <PrivetedRoute> <TravelTips /> </PrivetedRoute>
      },
      {
        path: '/privateEvents',
        element: <PrivetedRoute> <PrivateEvents/> </PrivetedRoute>
      },
      {
        path: `/estateDetails/:id`,
        element: <PrivetedRoute> <EstateDetails /> </PrivetedRoute>
      },

    ]
  },
]);

