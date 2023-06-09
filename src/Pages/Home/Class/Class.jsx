import ClassCard from "../../../Components/ClassCard";
import UseClass from "../../../hooks/UseClass";

const Class = () => {
    const [classes] = UseClass();
    return (       
            <div className="lg: grid grid-cols-3 gap-8">
                {
                    classes.map(items => <ClassCard key={items._id} items={items}></ClassCard>)
                }
            </div>
    );
};

export default Class;