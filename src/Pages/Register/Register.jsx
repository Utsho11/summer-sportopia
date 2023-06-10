import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {createUser,updateUserProfile} = UseAuth()

    const onSubmit = data => {
        createUser(data.email,data.password)
        .then(result => {
            const user = result.user;
            updateUserProfile(data.name,data.photo)
            .then(() => {
                const loggedUser = {name: data.name, email: data.email,role: 'student'}
                fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(loggedUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset()
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Successfully Created User',
                                    showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                    }
                                });
                                navigate('/')
                            }
                        })

                })
                .catch(error => {
                    console.log(error);
                })        
        })
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="pt-28">
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/2 text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL:</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photo && <span className='text-red-600'>Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                    required: true, minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must in 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must in less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must contain one uppercase letter, one lowercase letter and a special character.</p>}
                            </div>
                            <div className="form-control">
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" onClick={togglePasswordVisibility} className="checkbox checkbox-primary" />
                                <p> Show Password</p>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                        <p>Already have an account ? <Link to='/login'>Login</Link> </p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;