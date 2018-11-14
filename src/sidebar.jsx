/* eslint-disable react/self-closing-comp */
/* eslint-disable babel/quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import qs from 'qs';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  buildQueryString(operation, valueObj) {
    const search = this.props.location;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  }


  render() {
    return (
      <React.Fragment>
        <div className="siadebar">
          <div>
            <div className="filtercityicon"><h1>Filter By City: </h1> </div>
            <Link to={this.buildQueryString('query', { city: 'Manchester' })}><button className="searchbutton">Manchester</button></Link>
            <Link to={this.buildQueryString('query', { city: 'London' })}><button className="searchbutton">London</button></Link>
            <Link to={this.buildQueryString('query', { city: 'Stoke' })}><button className="searchbutton">Stoke</button></Link>
            <Link to={this.buildQueryString('query', { city: 'Liverpool' })}><button className="searchbutton">Liverpool</button></Link>
            <Link to={this.buildQueryString('query', { city: 'Wigan' })}><button className="searchbutton">Wigan</button></Link>
          </div>

          <div className="searchbyprice">
            <div className="searchprice"><h1>Search by price</h1> </div>
            <Link to={this.buildQueryString('sort', { price: -1 })}><button className="pricebutton">Price Descending</button></Link>
            <Link to={this.buildQueryString('sort', { price: 1 })}><button className="pricebutton">Price Assending</button></Link>

          </div>
        </div>

      </React.Fragment>


    );
  }
}

export default Sidebar;
