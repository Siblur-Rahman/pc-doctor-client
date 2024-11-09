import {LucideShoppingBasket, X} from 'lucide-react'
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAuth from '../hooks/useAuth';

const Modal = ({onClose, service}) => {
    const modalRef = useRef();
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()


    const {_id, service_name, service_area, price, service_image, providerName, providerEmail, providerImage, service_description} = service


    const closeModal = (e)=>{
        if(modalRef.current===e.target){
            onClose()
        }
    }
    const {
        register,
        handleSubmit,
      } = useForm();
      const bookedService = async (data) => {

        const serviceData = {
            uId:_id,
            service_name:data.service_name,
            service_area:service_area,
            price: price,
            service_image:service_image,
            service_description:service_description,
            status:'pending',
            userName:user?.displayName,
            userEmail:user?.email,
            providerEmail: providerEmail,
            providerImage:user?.photoURL
        }
        const service = await axiosPublic.post('/bookedservice', serviceData);
        if(service.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data?.service_name} is added to the service`,
                showConfirmButton: false,
                timer: 1500
              });
        }
}
    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className='mt-10 flex flex-col gap-5'> 
                <button onClick={onClose} className='place-self-end'><X size={30} /></button>
                <div className='bg-indigo-600 rounded-xl px-10 py-10 flex flex-col gap-5 items-center mx-4'>
                    <h1 className='text-3xl font-extrabold'>Purchase</h1>
                    <form onSubmit={handleSubmit(bookedService)}>
                    <div className="form-control w-ful my-6">

                    <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={service_image} alt="pictur" /></figure>
                    <div className="text-2xl"><span className='rounded-lg p-1'>ServiceId: {_id}</span></div>
                    <div className="text-2xl"><span className='rounded-lg p-1'>{service_name}</span></div>
                    <div className="text-2xl"><span className='rounded-lg p-1'>Provider Name: {providerName}</span></div>
                    <div className="text-2xl"><span className='rounded-lg p-1'>Provider Email: {providerEmail}</span></div>
                    <div className="text-2xl"><span className='rounded-lg p-1'>Customer Email: {user?.email}</span></div>
                    <div className="text-2xl"><span className='rounded-lg p-1'>Customer Name: {user?.displayName}</span></div>
                    <div className="text-2xl"><span className='rounded-lg p-1'>Price: {price}</span></div>
                    <div className="text-2xl"><span className='rounded-lg p-1'>{service_area}</span></div>

                    {/* Address */}
                    <div  className="form-control">
                        <label className="label">
                            <span className="label-text">Service Description*</span>
                        </label>
                        <textarea defaultValue={service_description} {...register("service_description")} className="textarea textarea-bordered h-24"></textarea>
                    </div>
                    </div>
                    {/* Submit */}
                    <button className='btn btn-primary'><button><LucideShoppingBasket />Purchase!</button></button>

                </form>
                </div>
            </div>
            8:24
        </div>
    );
};

export default Modal;