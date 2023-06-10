import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../../../hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogin} = UseAuth(); 

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            const user = result.user;
            console.log(user);
            const loggedUser = { name: user.displayName, email: user.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(loggedUser)
                        })
                            .then(res => res.json())
                            .then(() => {                              
                                    navigate(from,{replace: true});
                             })
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='text-center my-4'>
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;