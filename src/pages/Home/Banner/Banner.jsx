import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="w-[90%] mx-auto">
             <Carousel>
                <div>
                    <img src={'https://img.freepik.com/free-photo/miniature-engineer-worker-plug-lan-cable-computer_1252-838.jpg?semt=ais_hybrid'} />
                </div>
                <div>
                    <img src={'https://img.freepik.com/free-photo/hard-drive-with-blue-light-laptop-high-angle_23-2149417021.jpg?semt=ais_hybrid'} />
                </div>
                <div>
                    <img src={'https://img.freepik.com/premium-photo/spraying-alcohol-clean-computer-wipe-germs-health-care-concept_55997-1841.jpg?semt=ais_hybrid'} />
                </div>
                {/* <div>
                    <img src={''} />
                </div>
                <div>
                    <img src={''} />
                </div>
                <div>
                    <img src={''} />
                </div> */}
            </Carousel>
        </div>
    );
};

export default Banner;