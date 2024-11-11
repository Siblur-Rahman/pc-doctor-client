import { useLoaderData } from "react-router-dom";
import Service from "../../components/service";
import SectionTitle from "../../components/SectionTitle";

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className="">
            <SectionTitle heading={'All Services are Heare'}/>
            {
                services?.map(service => <Service key={service?._id} service={service}/>)
            }
        </div>
    );
};

export default AllServices;