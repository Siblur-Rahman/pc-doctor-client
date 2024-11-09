import {useLoaderData } from "react-router-dom";


const MyBookedServices = () => {
    const bookedServices = useLoaderData()
    return (
        <div className="mx-auto max-w-3xl p-8 rounded-xl m-5">
          <h1 className="text-2xl font-bold text-center">My Booking Services</h1>
    
          
    
          {bookedServices?.length === 0 && (
            <p className="text-center">No Service Booked yet.</p>
          )}
    
          {bookedServices?.length > 0 && (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-2 p-2">Service Name</th>
                  <th className="border-2 p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookedServices?.map((service) => (
                  <tr key={service?._id}>
                    <td className="border-2 text-3xl text-center">
                      {service.service_name}
                    </td>
                    <td className="border-2 text-3xl text-center">
                      {service.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      );
};

export default MyBookedServices;