import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { documentationContext } from '../../context/DocumentationContext';
import TopicCard from '../TopicCard/TopicCard';
import './TopicList.css';
import axios from 'axios';

const TopicList = () => {
    const { getTopics, topicsList } = useContext(documentationContext);
    const [ card, setCard ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ cardPerPage ] = useState(9)


    useEffect(() => {
        getTopics()
    },[])



    useEffect(() => {
        const getCards = async () => {
            setLoading(true)
            const res = await axios.get('http://localhost:8000/topics')
            setCard(res.data)
            setLoading(false)
        }

        getCards()
    }, [])





    const lastCardIndex = currentPage * cardPerPage
    const firstCardIndex = lastCardIndex - cardPerPage
    const currentCard = card.slice(firstCardIndex - lastCardIndex)

    const pageNumbers = []
    const totalCard = card.length

    for(let i = 1; i <= Math.ceil(totalCard / cardPerPage); i++){
         pageNumbers.push(i)
    }



    return (
        <div>
            <div className="add-topic">
                <Link to="/add">
                      <button>+ Добавить тему</button>
                </Link>
            </div>
            <div className="list">
                {topicsList.map(item => (
                    <TopicCard key={item.id} id={item.id} item={item.topicTitle} />
                ))}
            </div>
             <ul>
                 {
                     pageNumbers.map(item => {
                       <li key={item}>
                             <a href="!#">
                                 {item}
                             </a>
                       </li>
                   })
                 }
             </ul>
        </div>
    );
};

export default TopicList;