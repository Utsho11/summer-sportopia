import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content items-center justify-center">
                <div className='lg:mx-24 my-14'>
                    <Outlet></Outlet>
                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-black">

                    {
                        isAdmin ? <>
                            <li><Link to='/dashboard/adminHome'>Admin Home</Link></li>
                            
                        </> : <>
                        {
                            isInstructor ? <>
                            <li><Link to='/dashboard/userHome'>Instructor Home</Link></li>
                            </> : <>
                            <li><Link to='/dashboard/userHome'>User Home</Link></li>
                            </>
                        }
                        </>
                        
                    }
                    <div className="divider text-slate-900"></div>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/menu"> Menu</Link></li>
                    <li><Link to="/order/salads"> Order</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;