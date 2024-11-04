import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const Registration = () => {
    const {signInWithGoogle, createUser} = useAuth();
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
    }
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="lg:w-2/5 mx-auto border-2 border-blue-500 py-4">
                    <h1 className="text-5xl text-center font-bold text-white">Registration now!</h1>
            <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
             </form>
           <div className="px-8">
            <button onClick={handleGoogleSignIn} className="btn w-full">
                    <FaGoogle className="mr-4"/>
                    Google
                </button>
           </div>
        </div>
    );
};

export default Registration;