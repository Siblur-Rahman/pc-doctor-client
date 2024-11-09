
import { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Modal from './Modal';
const ServiceDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const [service, setService] = useState([])
  const {_id, service_image, service_area, service_name, providerEmail, service_description, price, }=service;
  const {id}=useParams()
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/service/${id}`)
    .then(res=>res.json())
    .then(data=>{
        setService(data)
    })
},[id])
const bookedService = async () => {

        const serviceData = {
            service_name:service_name,
            service_area:service_area,
            price: price,
            service_image:service_image,
            service_description:service_description,
            status:'pending',
            userName:user?.displayName,
            userEmail:user?.email,
            providerEmail: providerEmail
        }
        const service = await axiosPublic.post('/bookedservice', serviceData);
        console.log(service.data)
        if(service.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${service_name} is added to the service`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: ""
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //         axiosPublic.post('/bookedservice', serviceData)
        //         .then(res =>{
        //             if(res.data.insertedId){
        //                 Swal.fire({
        //                     position: "top-end",
        //                     icon: "success",
        //                     title: `${service_name} is added to the service`,
        //                     showConfirmButton: false,
        //                     timer: 1500
        //                   });
        //             }
        //         })
        //     }
        //   });
}
    return (
        
            <div className="card shadow-xl border-2 p-2 mt-4 h-[600px] grid justify-items-stretch">
                            {showModal && <Modal onClose={()=>setShowModal(false)}/>}
                <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={service_image} alt="pictur" /></figure>
                <div className="card-body">
                        <div className=''>
                                <div className="text-center text-3xl">{service_name}</div>
                                <div className='flex justify-between mt-4'>
                                    <div className="text-2xl"><span className='bg-yellow-100 rounded-lg p-1'>{price}</span></div>
                                    <div className="text-2xl"><span className='bg-yellow-100 rounded-lg p-1'>{service_area}</span></div>
                                </div>
                                <div className="mt-2"><span>{service_description}</span></div>
                        </div>       
                </div>
            <button onClick={()=>setShowModal(true)} className='btn btn-primary'><button>Book Now!</button></button>

            </div>
        
    );
};
export default ServiceDetails;