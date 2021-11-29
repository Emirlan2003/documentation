import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactLogo from '../../assets/img/react-logo.jpg';
import HtmlLogo from '../../assets/img/html-logo.jpg';
import JqueryLogo from '../../assets/img/jquery-logo.jpg';

const MainCarousel = () => {
    return (
        <Carousel showThumbs={false}>
            <div>
                <img src={ReactLogo} alt="react logo"/>
            </div>
            <div>
                <img src={HtmlLogo} alt="html logo"/>
            </div>
            <div>
                <img src={JqueryLogo} alt="jquery logo"/>
            </div>
        </Carousel>
    );
};

export default MainCarousel;