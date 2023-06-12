import { useQuery } from "@tanstack/react-query";
import { FaUserAlt, FaUserShield } from 'react-icons/fa';
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const ManageUsers = () => {
    const [axiosSecure] = UseAxiosSecure()
    const {data: users = [],refetch} = useQuery(['users'], async () =>{
        const res = await axiosSecure('/users')
        return res.data;
    })
    const handleUpdateAdmin = user =>{
        fetch(`https://summer-camp-school-server-utsho11.vercel.app/users/admin/${user._id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now an admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleUpdateInstructor = user => {
        fetch(`https://summer-camp-school-server-utsho11.vercel.app/users/instructor/${user._id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now an instructor`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Current Role</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) =><tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role? user.role : 'student'}</td>
                            <td>{user.role == 'admin' ? 'admin' : 
                            <button disabled={user.role == "admin"} onClick={()=>{handleUpdateAdmin(user)}} className="btn bg-orange-400 btn-ghost btn-xs text-white"><FaUserShield></FaUserShield></button>
                            }</td>
                            <td>{user.role == 'instructor' ? 'instructor' : 
                            <button onClick={()=>{handleUpdateInstructor(user)}} className="btn bg-blue-400 btn-ghost btn-xs text-white"><FaUserAlt></FaUserAlt></button>
                            }</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;