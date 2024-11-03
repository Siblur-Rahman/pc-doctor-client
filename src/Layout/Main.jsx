import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navber/Navbar";

const Main = () => {
    return (
        <div>
           <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;