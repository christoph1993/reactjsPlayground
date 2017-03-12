import React from 'react';
import {Link} from 'react-router';

export default class switchCountry extends React.Component {
    render() {
        return (
            <nav className="country-switch">
                {this.props.countries.map(menuCountry => {
                    return <Link key={menuCountry.id} to={'/country/${menuCountry.id}'}>
                    {menuCountry.name}
                    </Link>
                    }
                )
            }
            </nav>
        );
    }
}