import React from 'react';
import {Link} from 'react-router';
import countries from './countries';

export default class home extends React.Component{
    render() {
        <div className="Home">
            <div className="countries">
                {countries.map(countryInfo => <countryPreview key={countryInfo.id}{...countryInfo}/>)}
            </div>
        </div>
    }
}