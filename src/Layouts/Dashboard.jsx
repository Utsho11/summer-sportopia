import { Link, Outlet } from "react-router-dom";
import { FaHome, } from 'react-icons/fa';
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Dashboard = () => {
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
                        <li><Link to='/dashboard'><FaHome></FaHome> User Home</Link></li>
                        <li><Link to='/dashboard/selectedClass'>My Selected Class</Link></li>
                        <li><Link to='/dashboard/enrolledClass'>My Enrolled Class</Link></li>

                        <div className="divider text-slate-900"></div>
                        <li><Link to='/'><FaHome></FaHome> Home</Link></li>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;