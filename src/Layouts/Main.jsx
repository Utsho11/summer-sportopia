import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/SocialLogin/Footer/Footer";

const Main = () => {
    return (
        <div className="bg-gradient-to-b from-green-600 via-green-300">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;