import { useLoaderData } from "react-router-dom";
import Service from "../../components/service";

const Services = () => {
    const services = useLoaderData()
    return (
        <div className="lg:grid grid-cols-3 items-center">
            {
                services?.map(service => <Service key={service?._id} service={service}/>)
            }
        </div>
    );
};

export default Services;