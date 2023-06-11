import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user,loading} = UseAuth();
    const location = useLocation();
    
    if(loading)
    {
        return <div className='text-center'><progress className="mt-48 progress w-56 h-20"></progress></div>
    }
    if(user)
    {
        return children;
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoute;