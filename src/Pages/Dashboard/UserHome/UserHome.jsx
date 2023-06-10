import UseAuth from "../../../hooks/UseAuth";


const UserHome = () => {
    const {user} = UseAuth();
    return (
        <div>
            <h1>Welcome, {user.displayName}</h1>
        </div>
    );
};

export default UserHome;