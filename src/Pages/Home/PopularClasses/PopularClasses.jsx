import { Link } from "react-router-dom";
import UsePopularClass from "../../../hooks/UsePopularClass";

const PopularClasses = () => {
    const [popularClasses] = UsePopularClass();
    return (
        <div className="my-8">
            <h1 className="text-5xl text-center font-bold">OUR POPULAR CLASSES</h1>
            <div className="grid lg:grid-cols-3 gap-8 my-8 lg:mx-4">
            {
                popularClasses.map(item => 
                <div key={item._id} className="card bg-transparent shadow-xl">
                <figure><img className="w-full h-60" src={item.image}/></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.sportName}</h2>
                  <p>Instructor: {item.instructorName}</p>
                  <p>Available seats: {item.availableSeats}</p>
                  <p>Students: {item.number_of_student}</p>
                </div>
              </div>)
            }
            </div>
            <div className="text-center">
                <Link to='/classes'><button className="btn btn-outline bg-base-100 shadow-xl">Show more classes</button></Link>
            </div>
            
        </div>
    );
};

export default PopularClasses;