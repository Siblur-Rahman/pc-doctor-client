import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navber/Navbar";

const Main = () => {
    return (
        <div>
           <div className="fixed z-10">
                <Navbar/>
           </div>
            <div className="pt-20 h-[1600px] bg-black">
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;