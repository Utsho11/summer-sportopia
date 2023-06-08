import { Link } from "react-router-dom";

const NavBar = () => {
    const navOptions = <>
    <li><Link to='/' className="font-semibold">HOME</Link></li>
    <li><Link to='/classes' className="font-semibold">OUR CLASSES</Link></li>
    <li><Link to='/instructors' className="font-semibold">OUR INSTRUCTORS</Link></li>
    <li><Link className="font-semibold">DASHBOARD</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-green-600 via-green-300 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    
                    <Link to='/' className="flex items-center"><img src="https://i.ibb.co/8z5xQZK/logo.jpg" className="w-24 mr-4 border rounded-full"/><span className="font-bold text-3xl">Summer Sportopia</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;