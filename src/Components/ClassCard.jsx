
const ClassCard = ({ items }) => {

    const { sportName, image, instructorName, availableSeats, price } = items;

    return (
        <div>
            {
                availableSeats === 0 ?
                    <div className="card my-4 mx-4 w-96 bg-red-500 shadow-xl">
                        <figure><img className="w-full h-60" src={image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{sportName}</h2>
                            <p>Instructor: <b>{instructorName}</b></p>
                            <div className="flex">
                                <p>Available seats: {availableSeats}</p>
                                <p className="text-orange-400 font-bold">Price: {price}</p>
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
                                <p className="text-orange-400 font-bold">Price: {price}</p>
                            </div>
                            <div className="card-actions justify-center">
                                <button disabled={availableSeats === 0} className="btn btn-outline">Enroll Now</button>
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default ClassCard;