import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
           <div><a href="/">Home</a></div>
            <Outlet/>
        </div>
    );
};

export default Main;