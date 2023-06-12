import { Helmet } from "react-helmet-async";
import UseAuth from "../../../hooks/UseAuth";
import { JackInTheBox } from "react-awesome-reveal";


const UserHome = () => {
    const {user} = UseAuth();
    return (
        <div>
            <Helmet>
                <title>Dashboard || User</title>
            </Helmet>
            <JackInTheBox>
            <h1 className="text-5xl font-bold my-Auto">Welcome User, {user.displayName}</h1>
            </JackInTheBox>
        </div>
    );
};

export default UserHome;