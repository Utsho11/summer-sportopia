
import { Navigate, useLocation } from 'react-router-dom';

import UseAuth from '../hooks/UseAuth';
import VerifyAdmin from '../hooks/VerifyAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = UseAuth();
    const [isAdmin,isAdminLoading] = VerifyAdmin();
    const location = useLocation();
    if(loading || isAdminLoading)
    {
        return <div className='text-center'><progress className="progress w-56 h-20"></progress></div>
    }
    if(user && isAdmin)
    {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;