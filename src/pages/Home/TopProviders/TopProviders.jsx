import axios from "axios";
import { useEffect, useState } from "react";

const TopProviders = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/topprovider3`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div>
      <div className="py-32 ">
        <h4 data-aos="fade-right" className="text-2xl text-blue-500 text-center">Top #3 Creators</h4>
        <h2 data-aos="fade-left" className="text-5xl font-bold text-center">Top Contest Creators</h2>

        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-16">
          {users?.map((user) => (
            <div
            data-aos="zoom-in"
              key={user._id}
              className="max-w-xs  bg-[#212472] border p-4 rounded-lg shadow-md mx-4"
            >
              <img
                src={user?.image}
                alt={user?.name}
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-full"
              />
              <h3 className="text-xl text-white  font-semibold text-center mb-2">
                {user?.name}
              </h3>

              <p className="text-gray-300 text-center mb-4">
                Contests Created: {user.createCount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProviders;
