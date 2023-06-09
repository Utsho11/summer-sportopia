import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banner1 from '../../../assets/Banner/banner (1).jpg'
import banner2 from '../../../assets/Banner/banner (2).jpg'
import banner3 from '../../../assets/Banner/banner (3).jpg'
import banner4 from '../../../assets/Banner/banner (4).jpg'
import banner5 from '../../../assets/Banner/banner (5).jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div className="mt-28 h-[600px]">
                    <img className="w-full h-full" src={banner2} />
                </div>
                <div className="mt-28 h-[600px]">
                    <img className="w-full h-full" src={banner1} />
                </div>
                <div className="mt-28 h-[600px]">
                    <img className="w-full h-full" src={banner3} />
                </div>
                <div className="mt-28 h-[600px]">
                    <img className="w-full h-full" src={banner5} />
                </div>
                <div className="mt-28 h-[600px]">
                    <img className="w-full h-full" src={banner4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;