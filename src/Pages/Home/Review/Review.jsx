import React from 'react';
import { Hinge, JackInTheBox, Roll, Rotate, Slide } from 'react-awesome-reveal';

const Review = () => {
    return (
        <div className='my-8 mx-16'>
            <JackInTheBox>
            <p className='text-5xl my-10 text-center font-bold'>What People Say <br /> About US !!</p>
            </JackInTheBox>
            <div className='lg:flex gap-12 items-center p-8 justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <Rotate>
                    <figure><img className='w-full rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRPSMU9MRi7kFAE8cKiEhgRK-T4KZce7btg&usqp=CAU" alt="Shoes" /></figure>
                    </Rotate>
                </div>
                <p className='w-1/2 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure assumenda similique unde perferendis delectus ut quos aspernatur obcaecati beatae! Quos autem unde deserunt molestias in quam doloribus tempora id eligendi.</p>
            </div>
            <div className="divider"></div> 
            <div className='lg:flex gap-12 items-center p-8 justify-center'>
                <p className='w-1/2 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure assumenda similique unde perferendis delectus ut quos aspernatur obcaecati beatae! Quos autem unde deserunt molestias in quam doloribus tempora id eligendi.</p>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <Roll>
                    <figure><img className='w-full rounded-md' src="https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21pbGluZyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Shoes" /></figure>
                    </Roll>
                </div>
            </div>
            <div className="divider"></div> 
            <div className='lg:flex gap-12 items-center p-8 justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <Slide>
                    <figure><img className='w-full h-[275px] rounded-md' src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg" alt="Shoes" /></figure>
                    </Slide>
                </div>
                <p className='w-1/2 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure assumenda similique unde perferendis delectus ut quos aspernatur obcaecati beatae! Quos autem unde deserunt molestias in quam doloribus tempora id eligendi.</p>
            </div>
            <div className="divider"></div> 
            <div className='lg:flex gap-12 items-center p-8 justify-center'>
                <p className='w-1/2 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure assumenda similique unde perferendis delectus ut quos aspernatur obcaecati beatae! Quos autem unde deserunt molestias in quam doloribus tempora id eligendi.</p>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <Slide>
                    <figure><img className='w-full h-[280px] rounded-md' src="https://ph-files.imgix.net/81c8176a-1b00-4f10-b60f-2ab2729d0a14.png?auto=format" alt="Shoes" /></figure>
                    </Slide>
                </div>
            </div>
            <div className="divider"></div> 
            <div className='lg:flex gap-12 items-center p-8 justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <Hinge>
                    <figure><img className='w-full rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRPSMU9MRi7kFAE8cKiEhgRK-T4KZce7btg&usqp=CAU" alt="Shoes" /></figure>
                    </Hinge>
                </div>
                <p className='w-1/2 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure assumenda similique unde perferendis delectus ut quos aspernatur obcaecati beatae! Quos autem unde deserunt molestias in quam doloribus tempora id eligendi.</p>
            </div>
             <div className="divider"></div> 
        </div>
    );
};

export default Review;