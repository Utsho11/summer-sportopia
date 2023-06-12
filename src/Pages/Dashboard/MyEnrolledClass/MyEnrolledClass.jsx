import UseEnrollClasses from "../../../hooks/UseEnrollClasses";


const MyEnrolledClass = () => {
    const [enrollClasses] = UseEnrollClasses()
    return (
        <div>
            <div className="flex gap-36 items-center justify-center my-8 ">
                <h1 className="text-3xl font-bold text-center mt-4">Total Enrolled Class: {enrollClasses.length}</h1>

            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Sport</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enrollClasses.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.className}</td>
                                        <td>{item.instructor}</td>
                                        <td>${item.price}</td>
                                        <td className="text-success font-bold">{item.status}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyEnrolledClass;