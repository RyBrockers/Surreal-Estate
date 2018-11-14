/* eslint-disable max-len */
import React from 'react';
import '../styles/AddProperty.css';
import Axios from 'axios';
import Alert from './alert';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: '',
        city: '',
        bedrooms: 0,
        bathrooms: 0,
        price: 0,
        email: '',
      },
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: true,
      isError: false,
    });
    Axios.post('http://localhost:3000/api/v1/PropertyListing', this.state.fields)
      .then(() => this.setState({
        isSuccess: true,
        isError: false,
        alertMessage: 'Property added successfully.',
      }))
      .catch(() => this.setState({
        isSuccess: false,
        isError: true,
        alertMessage: 'Server error. Please try again later.',
      }));
  };

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };


  render() {
    return (

      <div className="AddProperty">

        <h1 className="title">Add A Property</h1>
        <div className="Alert.success">
          {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
        </div>
        <div>
          {this.state.isError && <Alert message={this.state.alertMessage} />}
        </div>

        <div className="submitform">

          <form onSubmit={this.handleAddProperty}>

            <label>Property Description: </label>

            <input name="title" type="text" value={this.state.fields.title} onChange={this.handleFieldChange} />

            <div className="typeinput">
              <label>Type: </label>
              <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terrace">Terrace</option>
                <option value="End Terrace">End Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </div>
            <div className="cityinput">
              <label>City: </label>
              <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
                <option value="Manchester">Manchester</option>
                <option value="London">London</option>
                <option value="Stoke">Stoke</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Wigan">Wigan</option>


              </select>
            </div>

            <div className="bedroominput">
              <label>Bedrooms: </label>

              <select name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="bathroominput">
              <label>Bathrooms: </label>
              <select name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="priceinput">
              <label>Price: </label>
              <select name="price" value={this.state.fields.price} onChange={this.handleFieldChange}>
                <option value={50000}>50000</option>
                <option value={100000}>100000</option>
                <option value={150000}>150000</option>
                <option value={200000}>200000</option>
              </select>
            </div>
            <div className="emailinput">
              <label>Your Email: </label>

              <input name="email" type="email" value={this.state.fields.email} onChange={this.handleFieldChange} />

            </div>


            <button className="AddButton" type="submit">Submit/Add</button>
          </form>

        </div>

      </div>
    );
  }
}

export default AddProperty;
