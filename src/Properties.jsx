/* eslint-disable react/no-unused-state */
import React from 'react';
import '../styles/Properties.css';
import PropertyCard from '../src/propertyCardCompnent';
import Axios from 'axios';
import Alert from '../src/alert';
import Sidebar from '../src/sidebar';


class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
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

  render() {
    return (

      <div className="properties">

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
