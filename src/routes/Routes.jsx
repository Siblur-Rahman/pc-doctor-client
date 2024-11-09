import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Services from "../pages/Services/Services";
import AddService from "../pages/Dashboard/AddService/AddService";
import ServiceDetails from "../components/serviceDetails";
import ManageService from "../pages/Dashboard/ManageService/ManageService";
import UpdateService from "../pages/Dashboard/UpdateService/UpdateService";
import ErrorPage from './../pages/ErrorPage';
import MyBookedServices from "../pages/Dashboard/MyBookedServices/MyBookedServices";
import ServiceToDo from "../pages/Dashboard/ServiceToDo/ServiceToDo";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    errorElement: <ErrorPage/>,
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
          element:<Services/>,
          loader:() =>  fetch(`${import.meta.env.VITE_API_URL}/allservices`)
        },
        {
          path:'/serviceDetails/:id',
          element:<ServiceDetails/>
        },
        // Dashboard Routes
        {
          path:'/addservice',
          element:<PrivateRoute><AddService/></PrivateRoute>
        },
        {
          path:'/manageservice',
           element:<PrivateRoute> <ManageService/> </PrivateRoute>,
          loader:() =>  fetch(`${import.meta.env.VITE_API_URL}/allservices`)
        },
        {
          path:'/mybookedservices/:email',
          element:<MyBookedServices/>,
          // element:<PrivateRoute> <MyBookedServices/></PrivateRoute>,
          loader:({params}) =>  fetch(`${import.meta.env.VITE_API_URL}/mybookedservices/${params.email}`)
        },
        {
          path:'/servicestodo/:email',
          element:<ServiceToDo/>,
          loader:({params}) =>  fetch(`${import.meta.env.VITE_API_URL}/servicestodo/${params.email}`)
        },
        {
          path:'/updateservic/:id',
          element:<UpdateService/>,
          loader:({params}) =>  fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
        }
      ]
    }
    ])