import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/Greetings';
import Things from './components/Things';
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Route path='/' component={App} />
        <Route path='/things' component={Things} />
        <Route path='*' component={NotFound} />
    </Router>
)

export default Routes;