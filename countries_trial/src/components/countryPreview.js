import React from 'react';
import {Link} from 'react-router';

export default class countryPreview extends React.Component {
    render() {
        return (
            <Link to={'/countries/${this.props.id}'}>
                <div className="country-preview">
                    <img src={'img/${this.props.id}'} />
                    <h2 className="countryName">{this.props.name}</h2>
                </div>
            </Link>
        );
    }
}