import Swal from "sweetalert2";
import UseClass from "../../../hooks/UseClass";
import { useState } from "react";
import InputModal from "./Feedback/InputModal";

const ManageClass = () => {
    const [classes, refetch] = UseClass();

    const handleUpdateAgreed = (item) => {

        fetch(`https://summer-camp-school-server-utsho11.vercel.app/classes/agree/${item._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Status Updated`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleUpdateDeny = (item) => {

        fetch(`https://summer-camp-school-server-utsho11.vercel.app/classes/deny/${item._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Status Updated`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        }

        const [modalOpen, setModalOpen] = useState(false);

        const handleOpenModal = () => {
            setModalOpen(true);
        };

        const handleCloseModal = () => {
            setModalOpen(false);
        };
        return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Sport</th>
                                <th>Instructor</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.sportName}</td>
                                        <td>{item.instructorName}</td>
                                        <td>{item.availableSeats}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button disabled={item.status ==='Agreed'} onClick={() => { handleUpdateAgreed(item) }} className="btn bg-blue-400 btn-ghost btn-xs text-white">Agree</button>
                                        </td>
                                        <td>
                                            <button disabled={item.status ==='Deny'} onClick={() => { handleUpdateDeny(item) }} className="btn bg-red-400 btn-ghost btn-xs text-white">Deny</button>
                                        </td>
                                        <td>
                                            <div className="container mx-auto">
                                                <button
                                                    className="px-4 bg-black text-white rounded-md btn-xs"
                                                    onClick={()=>{handleOpenModal(item._id)}}
                                                >feedback
                                                </button>
                                                <InputModal id={item._id} isOpen={modalOpen} onClose={handleCloseModal} />
                                            </div>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default ManageClass;