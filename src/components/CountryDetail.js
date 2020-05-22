// components/CountryDetail.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import data from '../countries.json';

function CountryDetail(props) {

    const country = data.filter(element => {
      return (element.cca3 === props.cca3.id);

    })

     return (
      <div className="col-7">
        <h1>{country[0].name.common}</h1>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country[0].capital}</td>
            </tr>
            <thead></thead>
            <tr>
              <td>Area</td>
            <td>{country[0].area} km<sup>2</sup></td>
            </tr>
            <thead></thead>
            <tr>
              <td>
                <ul>
                  {country[0].borders.map(element => {
                      return (
                        <li>
                          <Link to={`/country/${element}`}> { element } </Link>
                        </li>
                      )
                    })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}


export default CountryDetail;