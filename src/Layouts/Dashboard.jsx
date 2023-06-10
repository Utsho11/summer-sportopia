import { Link, Outlet } from "react-router-dom";
import { FaHome, } from 'react-icons/fa';
import NavBar from "../Pages/Shared/NavBar/NavBar";
import VerifyAdmin from "../hooks/VerifyAdmin";
import VerifyInstructor from "../hooks/VerifyInstructor";

const Dashboard = () => {

    const [isAdmin] = VerifyAdmin();
    const [isInstructor] =VerifyInstructor();
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col sm:mt-28">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden sm:mt-28">Open drawer</label>

                </div>
                <div className="drawer-side mt-28">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin ? <>
                            <li><Link to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</Link></li>
                            <li><Link to='/dashboard/manageUsers'>Manage Users</Link></li>
                            <li><Link to='/dashboard/manageClass'>Manage Class</Link></li> </> : <>
                            {
                                isInstructor ? <>
                                <li><Link to='/dashboard/instructorHome'><FaHome></FaHome> Instructor Home</Link></li>
                                <li><Link to='/dashboard/addClass'>Add Class</Link></li>
                                <li><Link to='/dashboard/myClasses'>My Classes</Link></li>
                                </>
                                 :
                                 <>
                                <li><Link to='/dashboard/userHome'><FaHome></FaHome> User Home</Link></li>
                                <li><Link to='/dashboard/selectedClass'>My Selected Class</Link></li>
                                <li><Link to='/dashboard/enrolledClass'>My Enrolled Class</Link></li>
                                 </>
                            }                            
                            </>
                        }

                        <div className="divider text-slate-900"></div>
                        <li><Link to='/'><FaHome></FaHome> Home</Link></li>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;