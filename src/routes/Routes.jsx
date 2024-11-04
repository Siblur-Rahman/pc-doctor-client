import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path: "/registration",
            element:<Registration/>
        },
        {
            path: "/login",
            element:<Login/>
        },
      ]
    }
    ])