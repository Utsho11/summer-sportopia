import { Helmet } from "react-helmet-async";
import UseAuth from "../../../hooks/UseAuth";
import { Fade, JackInTheBox } from "react-awesome-reveal";

const AdminHome = () => {
    const {user} = UseAuth();
    return (
        <div>
            <Helmet>
                <title>Dashboard || Admin</title>
            </Helmet>
            <JackInTheBox>
            <h1 className="text-5xl font-bold my-Auto">Welcome Admin, {user.displayName}</h1>
            </JackInTheBox>
        </div>
    )};export default AdminHome;