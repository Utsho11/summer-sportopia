import UseMyClass from "../../../hooks/UseMyClass";

const MyClasses = () => {
    const [myClass] = UseMyClass();
    console.log(myClass.length);

    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Sport</th>
                                <th>Instructor</th>
                                <th>Number of students</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClass.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.sportName}</td>
                                        <td>{item.instructorName}</td>
                                        <td>{item.number_of_student}</td>
                                        <td>${item.price}</td>
                                        <td>{item.status}</td>
                                        {
                                            item.feedback &&
                                            <td>{item.feedback.inputValue}</td>
                                        }
                                        
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;