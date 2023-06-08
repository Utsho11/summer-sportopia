
const InstructorCard = ({instructor}) => {
    const {image,name,email} = instructor;
    return (
        <div>
            <div className="card mt-32 mx-4 w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-60" src={image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>email: <b>{email}</b></p>
                        </div>
                    </div>
        </div>
    );
};

export default InstructorCard;