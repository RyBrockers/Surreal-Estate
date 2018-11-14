/* eslint-disable react/no-unused-state */
import React from 'react';
import '../styles/Properties.css';
import PropertyCard from '../src/propertyCardCompnent';
import Axios from 'axios';
import Alert from '../src/alert';
import Sidebar from '../src/sidebar';
import qs from 'qs';


class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
      search: '',
    };
  }


  componentDidMount() {
    Axios.get('http://localhost:3000/api/v1/PropertyListing', this.state.fields)
      .then(response => this.setState({ properties: response.data }))
      .catch(() => this.setState({
        isError: true,
        alertMessage: 'Server error. Please try again later.',
      }));
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      Axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };


  handleSearch = event => {
    event.preventDefault();
    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });
    const { history } = this.props;
    history.push(newQueryString);
  };


  render() {
    return (


      <div className="properties">
        <div className="searchform">
          <form onSubmit={this.handleSearch}>
            Search By Poperty Type:
            <input
              type="text"
              value={this.state.search}
              onChange={event => this.setState({ search: event.target.value })}
            />
            <button type="submit">Search</button>
          </form>
        </div>


        <Sidebar />

        <div className="submiterror">
          {this.state.isError && <Alert message={this.state.alertMessage} />}
        </div>
        {
          this.state.properties.map(property => (

            <div key={property._id} className="col">
              <PropertyCard

                title={property.title}
                type={property.type}
                city={property.city}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                email={property.email}
                price={property.price}
              />
            </div>

          ))
        }

      </div>


    );
  }
}

export default Properties;
