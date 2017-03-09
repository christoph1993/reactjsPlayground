import React from 'react';
import {Route, IndexRoute} from 'react-router';
import layout from './components/layout';
import home from './components/home';
import countryPage from './components/countryPage';
import notFound from './components/notFound';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={home}/>
        <Route path="country/:id" component={countryPage}/>
        <Route path="*" component={notFound}/>
    </Route>
);

export default routes;