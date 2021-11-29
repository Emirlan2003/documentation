import React, { useContext, useState } from 'react';
import { documentationContext } from '../../context/DocumentationContext';

const AddMainTopic = () => {
    const [title, setTitle] = useState("");
    const { addMainTopic } = useContext(documentationContext);

    function handleAddTopic(){
        const newTopic = {
            topicTitle: title,
            subTopics: []
        }
        addMainTopic(newTopic)
        setTitle("")
    }

    return (
        <div className="add-main-topics">
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название топика" type="text" />
            <button onClick={handleAddTopic}>Добавить</button>
        </div>
    );
};

export default AddMainTopic;