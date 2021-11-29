import React, { useContext, useEffect } from 'react';
import { documentationContext } from '../../context/DocumentationContext';
import "./Sidebar.css";

const Sidebar = () => {
    const { topicsList, getTopics } = useContext(documentationContext);

    useEffect(() => {
        getTopics()
    }, [])

    return (
        <div className="sidebar">
            <div>
                {topicsList.map(item => (
                    <div>
                        <h2>{item.topicTitle}</h2>
                        <ol>
                            {item.subTopics.map(subTopic => (
                                <li>{subTopic.subTopicTitle}</li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;