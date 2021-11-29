import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { documentationContext } from '../../context/DocumentationContext';
import Sidebar from '../Sidebar/Sidebar';
import './TopicDetails.css';

const TopicDetails = (props) => {
    const { getTopicDetails, topicDetails, deleteTopic } =  useContext(documentationContext)
    const [ deleteTask, setDeleteTopic ] = useState({})


    let params = useParams().id;
    useEffect(() => {
        getTopicDetails(props.match.params.id)
    }, []);


    useEffect(() => {
    console.log(topicDetails.topicTitle)
        setDeleteTopic(topicDetails.id)
    }, [topicDetails])

    return (
        <div className="container">
            <div className="wrapper">
                <div className="topic-details">
                    {topicDetails.topicTitle ? (
                        <>
                            <h1>{topicDetails.topicTitle}</h1>
                            {topicDetails.subTopics.map((item, index) => (
                                <div className="sub-topic">
                                    <h2>{item.subTopicTitle}</h2>
                                    <p>{item.firstDescription}</p>
                                    <div>
                                        <img src={item.img} alt="topic img" />
                                    </div>
                                    <p>{item.secondDescription}</p>
                                </div>
                            ))}
                                <div className="topic-details_btns_parent">
                                    <div className="topic-details_btns">
                                        <Link to={`/edit/${topicDetails.id}`}>
                                            <button>
                                                <img src="https://www.freeiconspng.com/uploads/edit-icon-orange-pencil-0.png" />
                                            Редактировать
                                        </button>
                                        </Link>
                                    </div>
                                   
                                         <div className="topic-details_btns">
                                             <Link to="/">
                                                 <button onClick={() => deleteTopic(deleteTask)}>
                                                     <img src="https://img1.freepng.ru/20180417/pow/kisspng-logo-trademark-brand-delete-button-5ad6b9e08c01d0.9106440615240217285735.jpg"/>
                                                     Удалить
                                                 </button>
                                             </Link>
                                         </div>
                                  
                                </div>
                        </>
                    ) : (
                            <h1>LOADING</h1>
                        )}
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default TopicDetails;