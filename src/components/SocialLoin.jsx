import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLoin = () => {
    const {signInWithGoogle} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then((result) =>{
            // create user entry in the Database
            const userInfo = {
                name:result?.user?.displayName,
                email:result?.user?.email
            }
            axiosPublic.post('/signup', userInfo)
            .then(res =>{
               console.log(res?.data)
                    navigate("/")
            })
        })
    }

    return (
        <div className="px-8">
            <button onClick={handleGoogleSignIn} className="btn w-full">
                <FaGoogle className="mr-4"/>
                Google
            </button>
        </div>
    );
};

export default SocialLoin;