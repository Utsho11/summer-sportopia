import ClassCard from "../../../Components/ClassCard";
import UseAgreedClasses from "../../../hooks/UseAgreedClasses";

const Class = () => {
    const [agreedClasses] = UseAgreedClasses()
    return (       
            <div className="pt-32 lg:grid grid-cols-3 gap-8">
                {
                    agreedClasses.map(items => <ClassCard key={items._id} items={items}></ClassCard>)
                }
            </div>
    );
};

export default Class;