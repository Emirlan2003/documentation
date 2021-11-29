import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Header.css';

const Header = () => {

    
    const [ value, setValue ] = useState('')
    const [ search, setSearch ] = useState([])
    const [ isOpen, setIsOpen ] = useState(true)


    function getSearch(){
        axios.get('http://localhost:8000/topics')
           .then(res => {
               setSearch(res.data)              
           })
           

    }

    useEffect(() => {
        getSearch()
    }, [])

   
    const filteredSearch = search.map(item => {
           return item.topicTitle.toLowerCase()
    })
   
   
    function itemClickHandler(e){
        setValue(e.target.textContent)
        setIsOpen(!isOpen)
    }

    function inputClickHandler(){
        setIsOpen(true)
    }

    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="navbar__logo">
                        <Link to="/">
                            <img src={Logo} alt="makers logo" />
                        </Link>
                    </div>
                    <ul className="navbar__right">
                        <Link to="/">
                            <li>Главная</li>
                        </Link>
                        <li>Документация</li>
                        <Link to="/add">
                            <li>Добавить</li>
                        </Link>
                        <li>
                        <li>
                                  <input 
                                         className="inputValue" 
                                         placeholder="Поиск" 
                                         onChange={(e) => setValue(e.target.value)} 
                                         value={value}
                                         onClick={inputClickHandler}
                                         /> 
                                 <ul className="autocomplete">
                                     {
                                         filteredSearch.map((item, index) => {
                                             if(item.toLowerCase() === value.toLowerCase() && isOpen){
                                                 return(
                                                    <Link to={`/details/${index + 1}`}>
                                                       <li id={item.id}
                                                       key={index} 
                                                       className="autocomplete_item"
                                                       onClick={itemClickHandler}>
                                                       {item}
                                                       </li>
                                                    </Link>
                                                 )
                                             }else{
                                                 return null
                                             }
                                         })
                                    }
                                     
                                 </ul>
                                 
                                           
                        </li>  
                                    
                                 
                         
                            
                        </li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;