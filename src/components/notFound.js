import React from 'react';
import {Link} from 'react-router';

export default class notFound extends React.Component{
    render() {
        return(
            <div className="not-found">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p><Link to="/">Main Page</Link></p>
            </div>
        );
    }
}