import { useLoaderData } from "react-router-dom";
import Service from "../../components/service";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className="">
            <Helmet>
                    <title>All Services</title>
            </Helmet>
            <SectionTitle heading={'All Services are Heare'}/>
            {
                services?.map(service => <Service key={service?._id} service={service}/>)
            }
        </div>
    );
};

export default AllServices;