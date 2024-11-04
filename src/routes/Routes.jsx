import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Services from "../pages/Services/Services";
import AddService from "../pages/Dashboard/AddService/AddService";
import ManageService from "../pages/Dashboard/ManageService/ManageService";

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
        {
          path:'/services',
          element:<Services/>
        },
        // private routes
        {
          path:'/addservice',
          element:<AddService/>
        },
        {
          path:'/manageservice',
          element:<ManageService/>
        }
      ]
    }
    ])