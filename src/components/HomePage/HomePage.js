import React from 'react';
import MainCarousel from '../Carousel/Carousel';
import TopicList from '../TopicList/TopicList';

const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className="container">
                <TopicList />
            </div>
        </div>
    );
};

export default HomePage;