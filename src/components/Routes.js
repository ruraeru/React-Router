import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aladin from "../Screens/Aladin";
import LionKing from "../Screens/LionKing";
import SpiderMan from "../Screens/SpiderMan";
import Header from './Header';
import Counter from '../Screens/Counter';
import TodoList from '../TodoList/RootTodo';
import InfiniteScroll from '../InfinitePicture/InfiniteScroll';
import Loginout from '../loginLogout/App';
import ColorfulCounter from '../colorfulCounter/App';

export default () => (
    <Router>
        <Header />
        <Route path="/aladin" component={Aladin} />
        <Route path="/lionking" component={LionKing} />
        <Route path="/spiderman" component={SpiderMan} />
        <Route path="/counter" component={Counter} />
        <Route path="/todolist" component={TodoList} />
        <Route path="/infinitescroll" component={InfiniteScroll} />
        <Route path="/loginform" component={Loginout} />
        <Route path="/colorfulcounter" component={ColorfulCounter} />
    </Router>
)