/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';
import '../styles/PropertyCardComponent.css';

class PropertyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: '',
      city: '',
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: '',
    };
  }

  render() {
    return (

      <div className="propcard">
        <div className="propcardlogo">
          <i className="fas fa-home fa-4x" />
        </div>
        <div className="propcardinfo">
          <div className="title"><h1 className="titleheader">{this.props.title}</h1></div>
          <div className="type"><h3>{this.props.type}</h3></div>
          <div className="city"><i className="fas fa-location-arrow"></i>  {this.props.city}</div>
          <div className="bedrooms"><i className="fas fa-bed"></i>  {this.props.bedrooms}</div>
          <div className="bathrooms"><i className="fas fa-bath"> </i>  {this.props.bathrooms}</div>
          <div className="price"><i className="fas fa-pound-sign"></i>  {this.props.price}</div>
          <div className="email">{this.props.email}</div>
        </div>


        <div className="emailtab">
          <a className="emaillink" href="mailto:someone@example.com?Subject=Hello%20again" target="_top">Email</a>
        </div>
      </div>
    );
  }
}
export default PropertyCard;
