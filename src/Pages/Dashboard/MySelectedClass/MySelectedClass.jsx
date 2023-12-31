import { FaTrashAlt } from "react-icons/fa";
import UseSelectedClass from "../../../hooks/UseSelectedClass";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MySelectedClass = () => {
    const [selectedClasses, refetch] = UseSelectedClass();
    const total = selectedClasses.reduce((sum, item) => item.price + sum, 0);





    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-school-server-utsho11.vercel.app/selectedClass/delete/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        refetch()
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };

    return (
        <div>
            <div className="flex gap-36 items-center justify-center my-8 ">
                <h1 className="text-3xl font-bold text-center mt-4">Total Selected Class: {selectedClasses.length}</h1>
                <h1 className="text-3xl font-bold text-center mt-4">You have to pay:<span className="text-green-600"> ${total}</span></h1>

            </div>

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
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClasses.map((item, index) =>
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
                                        <td>${item.price}</td>
                                        <td className='text-white'>
                                            <button onClick={() => { handleDelete(item) }} className="btn bg-red-600 btn-ghost btn-xs"><FaTrashAlt></FaTrashAlt></button>
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/payment/${item._id}`}>
                                                <button className="btn btn-warning btn-sm ">Pay</button>
                                            </Link>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default  MySelectedClass;