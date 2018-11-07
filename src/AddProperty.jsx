import React from 'react';
import '../styles/AddProperty.css';
import axios from 'axios';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: '',
        city: '',
        bedrooms: 1,
        bathrooms: 1,
        price: 1,
        email: '',
      },
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };
  }

  handleAddProperty = (event) => {
    this.setState(
      {
        alertMessage: '',
        isSuccess: false,
        isError: false,

      },

      axios.post('http://localhost:3000/api/v1/PropertyListing', {
        title: this.state.fields.title,
        type: this.state.fields.type,
        bedrooms: this.state.fields.bedrooms,
        bathrooms: this.state.fields.bathrooms,
        price: this.state.fields.price,
        city: this.state.fields.city,
        email: this.state.fields.email,
      })
    );
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
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
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
              <select name="city" value={this.state.fields.price} onChange={this.handleFieldChange}>
                <option value="£50,000-£100,00">£50,000-£100,000</option>
                <option value="£100,000-£150,000">£100,000-£150,000</option>
                <option value="£150,000-£200,000">£150,000-£200,000</option>
                <option value="£200,000-£250,000">£200,000-£250,000</option>
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
