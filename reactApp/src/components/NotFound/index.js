import React, { Components } from 'react';
import './notFound.css';

export default class NotFound extends Components {
    render() {
        return (
            <div className="notFound">
                <h1>
                    404. Page is not found. Sorry
                </h1>
            </div>
        );
    }
}