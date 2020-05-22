// components/CountriesList.js
 
import React from 'react';
import { Link } from 'react-router-dom';

import data from '../countries.json';

function CountriesList() {
    const countriesList = data.map ( element => {
        const id = `/country/${element.cca3}`;
    return <Link to={id} className="list-group-item list-group-item-acting" key={element.cca3}> <img src={`https://www.countryflags.io/${element.cca2.toLowerCase()}/flat/64.png`}></img>{ element.name.common } </Link>
    
    })
    
;    return (
        <div className="col-5" > 
            <div className="list-group">
            {countriesList}
            </div>
        </div>
);
}
 
export default CountriesList;