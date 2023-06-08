import UseInstructor from "../../../hooks/UseInstructor";

const PopularInstructors = () => {
    const [instructors] = UseInstructor();
    const popular = instructors.filter(item => item.category === 'popular')

    return (
        <div className="my-8">
            <h1 className="text-5xl text-center font-bold">OUR TOP INSTRUCTORS</h1>
            <div className="lg:grid grid-cols-2 my-8 gap-8">
                {
                    popular.map(item => <div key={item._id} className='flex space-x-4 items-center justify-center'>
                        <img style={{ borderRadius: '200px 0 200px 200px' }} className='w-[100px]' src={item.image} alt="" />
                        <h3 className='uppercase'>~~~ {item.name} ~~~</h3>
                    </div>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline bg-base-100 shadow-xl">Meet with our more instructors</button>
            </div>
        </div>
    );
};

export default PopularInstructors;