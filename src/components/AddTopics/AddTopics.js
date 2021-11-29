import React, { useContext, useEffect, useState } from 'react';
import { documentationContext } from '../../context/DocumentationContext';
import AddMainTopic from '../AddMainTopic/AddMainTopic';
import "./AddTopics.css";

const AddTopics = () => {
    const [topic, setTopic] = useState({
        subTopicTitle: "",
        firstDescription: "",
        img: "",
        secondDescription: ""
    });
    const [selectValue, setSelectValue] = useState("1");
    const { getTopics, topicsList, addSubTopic } = useContext(documentationContext);

    useEffect(() => {
        getTopics()
    }, [])

    function handleValues(e){
        let newSubTopic = {
            ...topic,
            [e.target.name]: e.target.value
        };
        setTopic(newSubTopic);
    }

    function handleClick(){
        console.log((selectValue));
        addSubTopic(topic, selectValue)
        setTopic({
            subTopicTitle: "",
            firstDescription: "",
            img: "",
            secondDescription: ""
        })
    }

    return (
        <div className="add-topics">
            <div>
                <h2>Добавить топик</h2>
                <AddMainTopic />
            </div>
            <div className="add-sub-topics">
                <h2>Добавить дочерний топик</h2>
                <select  select onChange={(e) => setSelectValue(e.target.value)}>
                    {topicsList.map(item => (
                        <option value={item.id} key={item.id}>{item.topicTitle}</option>
                    ))}
                </select>
                <input 
                    name="subTopicTitle" 
                    value={topic.subTopicTitle} 
                    onChange={handleValues} 
                    placeholder="Заголовок" 
                    type="text" 
                />
                <input 
                    name="firstDescription" 
                    value={topic.firstDescription} 
                    onChange={handleValues} 
                    placeholder="Описание" 
                    type="text" 
                />
                <input 
                    name="img" 
                    value={topic.img} 
                    onChange={handleValues} 
                    placeholder="Изображение" 
                    type="text" 
                />
                <input 
                    name="secondDescription" 
                    value={topic.secondDescription} 
                    onChange={handleValues} 
                    placeholder="Описание" 
                    type="text" 
                />
                <button onClick={handleClick}>Добавить</button>
            </div>
        </div>
    );
};

export default AddTopics;