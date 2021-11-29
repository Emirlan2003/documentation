import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddTopics from './components/AddTopics/AddTopics';
import EditTopics from './components/EditTopics/EditTopics';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import TopicDetails from './components/TopicDetails/TopicDetails';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/add" component={AddTopics} />
                <Route exact path="/details/:id" component={TopicDetails} />
                <Route exact path="/edit/:id" component={EditTopics} /> 
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;