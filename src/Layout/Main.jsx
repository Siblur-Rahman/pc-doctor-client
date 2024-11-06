import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navber/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <div className="relative">
           <div className="mx-auto">
                <Navbar/>
           </div>
            <div className="pt-20 h-[1600px]">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;