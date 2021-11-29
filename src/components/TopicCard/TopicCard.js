import React from 'react';
import { Link } from 'react-router-dom';
import './TopicCard.css';

const TopicCard = ({ item, id }) => {
    return (
        <div className="card">
            <Link to={`/details/${id}`}>
                {item}
            </Link>
        </div>
    );
};

export default TopicCard;