import React from 'react';
import countries from './countries';
import countryPreview from './countryPreview';

export default class home extends React.Component{
    render() {
        return (
            <div className="Home">
                <div className="countries">
                    {countries.map(countryInfo => <countryPreview key={countryInfo.id}{...countryInfo}/>)}
                </div>
            </div>
        );
    }
}