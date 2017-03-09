import React from 'react';
import {Link} from 'react-router';

export default class layout extends React.Component{
    render() {
        return (
            <div>
                <header>
                    <Link to="/">
                        <img className="countryLogo" src="http://www.timvandevall.com/wp-content/uploads/blank-flag.jpg" />
                    </Link>
                </header>
                <div className="country-content">{this.props.children}</div>
                <footer>
                    <p>ReactJS Development Playground</p>
                </footer>
            </div>
        );
    }
}