import Swal from "sweetalert2";
import UseAuth from "../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseSelectedClass from "../hooks/UseSelectedClass";

const ClassCard = ({ items }) => {

    const { _id,sportName, image, instructorName, availableSeats, price } = items;
    const {user} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] = UseSelectedClass();

    const handleEnrollClasses = item =>{
        console.log(item);
        if(user && user.email){
            const selectedClass = {email: user.email,_id,image,price,sportName,instructorName}
            fetch('http://localhost:5000/selectClasses',{
                method: 'POST',
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId)
                {
                    refetch()
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Class has been enrolled',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login first to order',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{state:{from: location}})
                }
              })
        }
    }


    return (
        <div>
            {
                availableSeats === 0 ?
                    <div className="card mx-4 w-96 bg-red-500 shadow-xl">
                        <figure><img className="w-full h-60" src={image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{sportName}</h2>
                            <p>Instructor: <b>{instructorName}</b></p>
                            <div className="flex">
                                <p>Available seats: {availableSeats}</p>
                                <p className="text-orange-400 font-bold">Price: ${price}</p>
                            </div>
                            <div className="card-actions justify-center">
                                <button disabled={availableSeats === 0} className="btn btn-outline">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="card mx-4 w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-60" src={image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{sportName}</h2>
                            <p>Instructor: <b>{instructorName}</b></p>
                            <div className="flex">
                                <p>Available seats: {availableSeats}</p>
                                <p className="text-orange-400 font-bold">Price: ${price}</p>
                            </div>
                            <div className="card-actions justify-center">
                                <button onClick={()=>{handleEnrollClasses(items)}} disabled={availableSeats === 0} className="btn btn-outline">Enroll Now</button>
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default ClassCard;