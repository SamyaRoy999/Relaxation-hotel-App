import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots />,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
       
      ]
    },
  ]);

