import { Link, Outlet } from "react-router-dom";
import { FaBook, FaChalkboardTeacher, FaCheckSquare, FaHome, FaMoneyCheckAlt, FaPlusSquare, FaUserAlt, } from 'react-icons/fa';
import NavBar from "../Pages/Shared/NavBar/NavBar";
import VerifyAdmin from "../hooks/VerifyAdmin";
import VerifyInstructor from "../hooks/VerifyInstructor";
import Footer from "../Pages/Shared/SocialLogin/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

    const [isAdmin] = VerifyAdmin();
    const [isInstructor] =VerifyInstructor();
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col sm:mt-28">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden sm:mt-96">Open drawer</label>

                </div>
                <div className="drawer-side mt-28">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin ? <>
                            <li><Link to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</Link></li>
                            <li><Link to='/dashboard/manageUsers'><FaUserAlt></FaUserAlt> Manage Users</Link></li>
                            <li><Link to='/dashboard/manageClass'><FaBook></FaBook>Manage Class</Link></li> </> : <>
                            {
                                isInstructor ? <>
                                <li><Link to='/dashboard/instructorHome'><FaHome></FaHome> Instructor Home</Link></li>
                                <li><Link to='/dashboard/addClass'><FaPlusSquare></FaPlusSquare>Add Class</Link></li>
                                <li><Link to='/dashboard/myClasses'><FaChalkboardTeacher></FaChalkboardTeacher> My Classes</Link></li>
                                </>
                                 :
                                 <>
                                <li><Link to='/dashboard/userHome'><FaHome></FaHome> User Home</Link></li>
                                <li><Link to='/dashboard/selectedClass'><FaCheckSquare></FaCheckSquare> My Selected Class</Link></li>
                                <li><Link to='/dashboard/enrollClasses'><FaMoneyCheckAlt></FaMoneyCheckAlt> My Enrolled Class</Link></li>
                                 </>
                            }                            
                            </>
                        }

                        <div className="divider text-slate-900"></div>
                        <li><Link to='/'><FaHome></FaHome> Home</Link></li>
                    </ul>


                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;