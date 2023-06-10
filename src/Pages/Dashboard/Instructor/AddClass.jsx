import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [axiosSecure] = UseAxiosSecure();
    const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_API;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data =>{
        const formData = new FormData();
        formData.append('image',data.image[0])

        fetch(img_hosting_url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const img_url = imgResponse.data.display_url;
                const {name,price,category,recipe} = data;
                const newItem = {name,price: parseFloat(price),category,recipe,image: img_url};
                
                axiosSecure.post('/menu',newItem)
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
                            <span className="label-text">Recipe name</span>
                        </label>
                        <input type="text" placeholder="Recipe name" {...register("name", {required: true, maxLength: 80})} className="input input-bordered w-full" />
                    </div>
                    <div className='flex gap-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={"Category"} {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Category</option>
                                <option>Salads</option>
                                <option>Pizza</option>
                                <option>Soups</option>
                                <option>Deserts</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control lg:w-full xs:max-w-xs">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="text" placeholder="Price" {...register("price", {required: true, maxLength: 80})} className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-32" placeholder="Recipe Details" {...register("recipe", {required: true, maxLength: 1000})}></textarea>
                    </div>
                    <input type="file" {...register("image", {required: true})} className="my-8 file-input file-input-bordered w-full max-w-xs" /> <br />
                    <input type="submit" value="Add Item" className="bg-[#835D23] btn" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;