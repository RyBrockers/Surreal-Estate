/* eslint-disable babel/quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <div><h1>Filter By City:</h1></div>
      <Link to={`/?query={"city": "Manchester"}`}><button className="searchbutton">Manchester</button></Link>
      <Link to={`/?query={"city": "London"}`}><button className="searchbutton">London</button></Link>
      <Link to={`/?query={"city": "Stoke"}`}><button className="searchbutton">Stoke</button></Link>
      <Link to={`/?query={"city": "Liverpool"}`}><button className="searchbutton">Liverpool</button></Link>
      <Link to={`/?query={"city": "Wigan"}`}><button className="searchbutton">Wigan</button></Link>

    </div>
  );
};

export default Sidebar;
