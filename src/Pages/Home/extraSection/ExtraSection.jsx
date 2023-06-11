import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const ExtraSection = () => {

    const backgroundImage = "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80";


    const handleScrollDown = () => {
        const offset = 800;
        window.scrollTo({
            top: window.pageYOffset + offset,
            behavior: "smooth",
        });
    };
    return (
        <div className='mb-16'>
            <div className="hero min-h-screen bg-slate-800" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>

                <div>
                    <Slide>
                    <h1 className="text-5xl font-bold text-green-400">Enjoy Your Sports</h1>
                    </Slide>
                    <Fade>
                    <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-success" onClick={handleScrollDown}>Get Started</button>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;