// components/CountriesList.js
 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import data from '../countries.json';

class CountriesList extends Component {
    constructor(){
        super()
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        axios.get("https://countries.tech-savvy.tech/countries")
        .then(response => {
            const countriesList = response.data.map ( element => {
                    const id = `/country/${element.cca3}`;
                return <Link to={id} className="list-group-item list-group-item-acting" key={element.cca3}> <img src={`https://www.countryflags.io/${element.cca2.toLowerCase()}/flat/64.png`}></img>{ element.name.common } </Link>
                
                });
            this.setState({countries: countriesList})
        })
    }

    render () {
        return (
        <div className="col-5" > 
            <div className="list-group">
                {this.state.countries}
            </div>
        </div>
        );
    }
}
 
export default CountriesList;