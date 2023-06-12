import { Helmet } from "react-helmet-async";
import InstructorCard from "../../../Components/InstructorCard";
import UseInstructor from "../../../hooks/UseInstructor";

const Instructor = () => {
    const [instructors] = UseInstructor();
    return (
        <div>
            <Helmet>
                <title>Our Instructor</title>
            </Helmet>
            <div className="pt-32 lg:grid grid-cols-3">
            {
                instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
        </div>
        </div>
    );
};

export default Instructor;