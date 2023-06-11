import { Link } from "react-router-dom";
import UseInstructor from "../../../hooks/UseInstructor";
import { Flip } from "react-awesome-reveal";

const PopularInstructors = () => {
    const [instructors] = UseInstructor();
    const popular = instructors.filter(item => item.category === 'popular')

    return (
        <div className="my-8">
            <Flip>
            <h1 className="text-5xl text-center font-bold">OUR TOP INSTRUCTORS</h1>
                </Flip>            
            <div className="lg:grid grid-cols-2 my-8 gap-8">
                {
                    popular.map(item => <div key={item._id} className='flex space-x-4 items-center justify-center'>
                        <img className='w-[100px] rounded-full' src={item.image} alt="" />
                        <h3 className='uppercase'>~~~ {item.name} ~~~</h3>
                    </div>)
                }
            </div>
            <div className="text-center">
                <Link to='/instructors'><button className="btn btn-outline bg-base-100 shadow-xl">Meet with our more instructors</button></Link>
            </div>
        </div>
    );
};

export default PopularInstructors;