import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/*  Import all Components here */
import Main from './component/common/main.component.jsx';
import Home from './component/common/home.component.jsx';
import About from './component/common/about.component.jsx';
import Books from './component/books/books.component.jsx';
import AddBook from './component/books/addbook.component.jsx';


/* Routing goes here */
render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/books" component={Books}/>
            <Route path="/addbook" component={AddBook}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);