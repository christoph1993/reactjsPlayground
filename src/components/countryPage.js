import React from 'react';
import {Link} from 'react-router';
import notFound from './notFound';
import switchCountry from './switchCountry';
import countries from './countries';

export default class countryPage extends React.Component {
    render() {
        const id = this.props.params.id;
        const country = contries.filter((country)=>country.id == id)[0];
        if(!country){
            return <notFound/>;
        }
        return (
            <div className="country-detail">
                <switchCountry countries={countries}/>
                <p className="description">
                    National currency of {country.name} is {country.currency} 
                </p>
                <div>
                    <Link to="/"> Back to Home</Link>
                </div>
            </div>
        );
    }
}