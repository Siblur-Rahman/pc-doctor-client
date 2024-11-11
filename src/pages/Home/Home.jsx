import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularServices from "./popularServices/PopularServices";


const Home = () => {
    return (
        <div>
            <Helmet>
                    <title>Home</title>
            </Helmet>
            <Banner/>
            <PopularServices/>
        </div>
    );
};

export default Home;