import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import UseAuth from "../../../hooks/UseAuth";

const AddClass = () => {
    const {user} = UseAuth();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [axiosSecure] = UseAxiosSecure();
    const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_API;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data =>{
        const formData = new FormData();
        formData.append('image',data.image[0])
        console.log(formData);

        fetch(img_hosting_url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const img_url = imgResponse.data.display_url;
                const {instructorName,price,sportName,email,availableSeats} = data;
               
                
                axiosSecure.post('/classes',{instructorName,price: parseFloat(price),sportName,email,availableSeats,image: img_url,status: 'pending',number_of_student:0})
                .then(data =>{
                    reset()
                    if(data.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'New item has been added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })


            }
        })
    }
    return (
        <div>
            <div className='bg-slate-300 p-14'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control lg:w-full xs:max-w-xs">
                        <label className="label">
                            <span className="label-text">Class name:</span>
                        </label>
                        <input type="text" placeholder="Class name" {...register("sportName", {required: true, maxLength: 80})} className="input input-bordered w-full" />
                    </div>
                    <div className='flex gap-4'>                        
                        <div className="form-control lg:w-full xs:max-w-xs">
                            <label className="label">
                                <span className="label-text">Instructor:</span>
                            </label>
                            <input type="text" readOnly defaultValue={user.displayName} placeholder="Instructor" {...register("instructorName", {required: false, maxLength: 80})} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control lg:w-full xs:max-w-xs">
                            <label className="label">
                                <span className="label-text">Instructor Email:</span>
                            </label>
                            <input type="email" readOnly defaultValue={user.email} placeholder="Email" {...register("email", {required: false, maxLength: 80})} className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className='flex gap-4'>                        
                        <div className="form-control lg:w-full xs:max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Seats:</span>
                            </label>
                            <input type="text" placeholder="Seats" {...register("availableSeats", {required: true, maxLength: 80})} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control lg:w-full xs:max-w-xs">
                            <label className="label">
                                <span className="label-text">Price:</span>
                            </label>
                            <input type="text" placeholder="Price" {...register("price", {required: true, maxLength: 80})} className="input input-bordered w-full" />
                        </div>
                    </div>
                    <label className="label">
                    <span className="label-text">Image:</span>
                    </label>
                    <input type="file" {...register("image", {required: true})} className=" file-input file-input-bordered w-full max-w-xs" /> 
                    <br /> <br />
                    <input type="submit" value="Add Item" className="bg-green-400 btn" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;