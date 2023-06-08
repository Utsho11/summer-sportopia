import InstructorCard from "../../../Components/InstructorCard";
import UseInstructor from "../../../hooks/UseInstructor";

const Instructor = () => {
    const [instructors] = UseInstructor();
    return (
        <div className="lg:grid grid-cols-3">
            {
                instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
        </div>
    );
};

export default Instructor;