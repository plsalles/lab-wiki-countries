// components/CountryDetail.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';



class CountryDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
        countryDetails: [],
    }
  }

    // const country = data.filter(element => {
    //   return (element.cca3 === props.cca3.id);

    // })

  componentDidMount() {
     // const { id } = this.props.match.params;
    axios.get(`https://countries.tech-savvy.tech/countries`)
    .then(response => {
      //   const country = response.data.filter(element => {
      //   return (element.cca3 === this.props.cca3.id);
      // })

      this.setState({
        countryDetails: response.data})
    })
  }

  filterCountry = () => {
     const country = this.state.countryDetails.filter(element => {
      return (element.cca3 === this.props.cca3.id);
    })
    return country[0];
  }

  render () {
    
    const country = this.filterCountry();

    return (
      <div className="col-7">
        {
          this.state.countryDetails.length === 0
          ? <h1>Loading...</h1>
          : (
              <>
                <h1>{country.name.common}</h1>
                <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Capital</td>
                    <td>{country.capital}</td>
                  </tr>
                  <thead></thead>
                  <tr>
                    <td>Area</td>
                  <td>{country.area} km<sup>2</sup></td>
                  </tr>
                  <thead></thead>
                  <tr>
                    <td>
                      <ul>
                        {country.borders.map(element => {
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
            </>
          )
        }
      </div>
    );
  }
}


export default CountryDetail;