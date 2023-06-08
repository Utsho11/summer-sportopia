import UseClass from "../../../hooks/UseClass";

const PopularClasses = () => {
    const [classes] = UseClass();
    const popular = classes.filter(item => item.category === 'popular')
    return (
        <div className="my-8">
            <h1 className="text-5xl text-center font-bold">OUR POPULAR CLASSES</h1>
            <div className="grid lg:grid-cols-3 gap-8 my-8 lg:mx-4">
            {
                popular.map(item => 
                <div key={item._id} className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-60" src={item.image}/></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.sportName}</h2>
                  <p>Instructor: {item.instructorName}</p>
                  <p>Available seats: {item.availableSeats}</p>
                </div>
              </div>)
            }
            </div>
            <div className="text-center">
                <button className="btn btn-outline bg-base-100 shadow-xl">Show more classes</button>
            </div>
            
        </div>
    );
};

export default PopularClasses;