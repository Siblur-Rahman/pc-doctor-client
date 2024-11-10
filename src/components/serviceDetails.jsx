
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
  const {_id, service_image, service_area, service_name, providerEmail, providerImage, providerName, service_description, price, }=service;
  const {id}=useParams()
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/service/${id}`)
    .then(res=>res.json())
    .then(data=>{
        setService(data)
    })
},[id])

    return (
        
    <div className=''>
                {showModal && <Modal onClose={()=>setShowModal(false)} service={service}/>}
            <div className="card shadow-xl border-2 p-2 mt-4 h-[600px] grid justify-items-stretch">
                                <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={service_image} alt="pictur" /></figure>
                                <div className="text-3xl">{service_name}</div>
                                <div className="text-3xl">{service_description}</div>
                                <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={providerImage} alt="pictur" /></figure>
                                <div className="text-2xl"><span className='bg-yellow-100 rounded-lg p-1'>{providerName}</span></div>
                                <div className="text-2xl"><span className='bg-yellow-100 rounded-lg p-1'>{price}</span></div>
                                <div className="text-2xl"><span className='bg-yellow-100 rounded-lg p-1'>{service_area}</span></div>
                                <div className="mt-2"><span>{service_description}</span></div>
            <button onClick={()=>setShowModal(true)} className='btn btn-primary'><button>Book Now!</button></button>

            </div>
    </div>
        
    );
};
export default ServiceDetails;