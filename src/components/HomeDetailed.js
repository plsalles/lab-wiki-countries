// components/CountriesList.js
 
import React from 'react';
import { Link } from 'react-router-dom';

import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';

function HomeDetailed(props) {

  return (
        <div className="row">
          <CountriesList/>
          <CountryDetail cca3={props.match.params}/>
        </div>
    );
  }
 
export default HomeDetailed;