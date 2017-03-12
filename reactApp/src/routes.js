import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/Greetings/index';
import Things from './components/Things/index';
import NotFound from './components/NotFound/index';

const Routes = (props) => (
    <Router {...props}>
        <Route path='/' component={App}>
            <Route path='/things' component={Things} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
)

export default Routes;